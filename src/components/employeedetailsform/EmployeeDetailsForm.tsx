import "./EmployeeDetailsForm.css";
import Button from "../button/Button";
import Select from "../select/Select";
import Input from "../input/Input";
import type { CSSProperties, ReactNode } from "react";
import { EmployeeRole, EmployeeStatus, type Address, type Employee, type Role, type Status } from "../../store/employee/employee.types";
import { useLocation } from "react-router-dom";
import { useGetDepartmentListQuery } from "../../api-services/departments/department.api";

const RoleOptions = [
  {
    name: EmployeeRole.UI,
    label: "UI",
  },
  {
    name: EmployeeRole.UX,
    label: "UX",
  },
   {
    name: EmployeeRole.HR,
    label: "HR",
  },
   {
    name: EmployeeRole.DEV,
    label: "DEVELOPER",
  },
];

const StatusOptions = [
  {
    name: EmployeeStatus.ACTIVE,
    label: "Active",
  },
  {
    name: EmployeeStatus.INACTIVE,
    label: "Inactive",
  },
  {
    name: EmployeeStatus.PROBATION,
    label: "Probation",
  },
];

type EmployeeFormType = {
  id?: number;
  name?: string;
  empId?: string;
  email?: string;
  password?: string;
  age?: number;
  dateOfJoining?: string;
  role: Role;
  status: Status;
  departmentId: string;
  exp?: number;
  address?: Address;
  actionButtons?: ReactNode;
  isEmpIDDisabled?: boolean;
  empIDDisabledStyle?: CSSProperties;
  update: (field: keyof Employee, value: string| number) => void;
  updateAddress: (field: string, value: string) => void;
  createEmployee: () => void;
};

const EmployeeDetailsForm = ({
  name,
  email,
  password,
  age,
  empId,
  dateOfJoining,
  role,
  status,
  exp,
  departmentId,
  address,
  actionButtons,
  isEmpIDDisabled,
  empIDDisabledStyle,
  update,
  updateAddress,
  createEmployee,
}: EmployeeFormType) => {

  const location = useLocation();
  const {data = []} = useGetDepartmentListQuery({})

  const DepartmentOptions = data.map((dep) => ({
    name : dep.id,
    label : dep.name
  }));
 
  return (
    <div className="form__container">
      <div className="form">
        <Input
          placeholder={name || "Employee Name"}
          value={name}
          name="Employee Name"
          type="text"
          id="name"
          onChange={(e) => update("name", e.target.value)}
        ></Input>
        <Input
          placeholder={email || "Employee Email"}
          value={email}
          name="Employee Email"
          type="email"
          id="email"
          onChange={(e) => update("email", e.target.value)}
        ></Input>
        <Input
          placeholder="Password"
          // value=
          name="Password"
          type="password"
          id="password"
          onChange={(e) => update("password", e.target.value)}
        ></Input>
        <Input
          placeholder={age?.toString() || "Employee Age"}
          value={age}
          name="Employee Age"
          type="number"
          id="age"
          onChange={(e) => update("age", Number(e.target.value))}
        ></Input>
        <Input
          placeholder={dateOfJoining || "Joining Date"}
          value={dateOfJoining}
          name="Joining Date"
          type="date"
          id="dateOfJoining"
          onChange={(e) => update("dateOfJoining", (e.target.value))}
        ></Input>
        <Input
          placeholder={exp?.toString() || "Experience"}
          value={exp}
          name="Experience"
          type="number"
          id="exp"
          onChange={(e) => update("experience", Number(e.target.value))}
        ></Input>

        <div className="inputform">
          <Select
            name="Department"
            id="dept"
            options={DepartmentOptions}
            value={departmentId}
            onChange={(e) => {console.log(e.target.value); update("departmentId", Number(e.target.value))}}
          ></Select>
        </div>

        <div className="inputform">
          <Select
            name="Role"
            id="role"
            options={RoleOptions}
            value={role}
            onChange={(e) => update("role", e.target.value as Role)}
          ></Select>
        </div>

        <div className="inputform">
          <Select
            name="Status"
            id="status"
            options={StatusOptions}
            value={status}
            onChange={(e) => update("status", e.target.value as Status)}
          ></Select>
        </div>

        <div className="inputform">
          <label className="input__label" htmlFor="">
            Address
          </label>
          <input
            type="text"
            placeholder="Flat No. / House No."
            value={address?.houseNo}
            onChange={(e) => updateAddress("houseNo", e.target.value)}
          />
          <input
            type="text"
            placeholder="Address Line 1"
            value={address?.line1}
            onChange={(e) => updateAddress("line1", e.target.value)}
          />
          <input
            type="text"
            placeholder="Address Line 2"
            value={address?.line2}
            onChange={(e) => updateAddress("line2", e.target.value)}
          />
          <input
            type="text"
            placeholder="Pincode"
            value={address?.pincode}
            onChange={(e) => updateAddress("pincode", e.target.value)}
          />
        </div>

        <Input
          name="Employee ID"
          type="text"
          id="employeeId"
          disabled={isEmpIDDisabled}
          placeholder={empId || "Employee ID"}
          styles={empIDDisabledStyle}
          onChange={(e) => update("employeeId", e.target.value)}
          value={empId}
        ></Input>

      </div>

      <div className="form__buttons">{actionButtons && (actionButtons)}</div>
    </div>
  );
};

export default EmployeeDetailsForm;
