import "./EmployeeDetailsForm.css";
import Button from "../button/Button";
import Select from "../select/Select";
import Input from "../input/Input";
import type { CSSProperties, ReactNode } from "react";

const DepartmentOptions = [
  {
    name: "Select Department",
    label: "Select Department",
  },
  {
    name: "HR",
    label: "HR",
  },
];

const RoleOptions = [
  {
    name: "Select Role",
    label: "Select Role",
  },
  {
    name: "Trainee",
    label: "Trainee",
  },
];

const StatusOptions = [
  {
    name: "Select Status",
    label: "Select Status",
  },
  {
    name: "Active",
    label: "Active",
  },
  {
    name: "Inactive",
    label: "Inactive",
  },
  {
    name: "Probation",
    label: "Probation",
  },
];

type EmployeeFormType = {
  name?: string;
  empId?: string;
  email?: string;
  password?: string;
  age?: string;
  joiningDate?: string;
  role?: string;
  status?: string;
  exp?: string;
  address?: string;
  actionButtons?: ReactNode;
  isEmpIDDisabled?: boolean;
  empIDDisabledStyle?: CSSProperties;
  update: (field: string, value: string) => void;
};

const EmployeeDetailsForm = ({
  name,
  email,
  password,
  age,
  empId,
  joiningDate,
  role,
  status,
  exp,
  address,
  actionButtons,
  isEmpIDDisabled,
  empIDDisabledStyle,
  update,
}: EmployeeFormType) => {
  const handleCreateEmployee = () => {};
  const handleCancelCreateEmployee = () => {};
  return (
    <div className="form__container">
      <div className="form">
        <Input
          placeholder={name || "Employee Name"}
          name="Employee Name"
          type="text"
          id="name"
          onChange={(e) => update("name", e.target.value)}
        ></Input>
        <Input
          placeholder={email || "Employee Email"}
          name="Employee Email"
          type="email"
          id="email"
          onChange={(e) => update("email", e.target.value)}
        ></Input>
        <Input
          placeholder={password || "Password"}
          name="Password"
          type="password"
          id="password"
          onChange={(e) => update("password", e.target.value)}
        ></Input>
        <Input
          placeholder={age || "Employee Age"}
          name="Employee Age"
          type="text"
          id="email"
          onChange={(e) => update("age", e.target.value)}
        ></Input>
        <Input
          name="Joining Date"
          type="date"
          id="joiningdate"
          onChange={(e) => update("joiningDate", e.target.value)}
        ></Input>
        <Input
          placeholder={exp || "Experience"}
          name="Experience"
          type="number"
          id="exp"
          onChange={(e) => update("exp", e.target.value)}
        ></Input>

        <div className="inputform">
          <Select
            name="Department"
            id="dept"
            options={DepartmentOptions}
          ></Select>
        </div>

        <div className="inputform">
          <Select name="Role" id="role" options={RoleOptions}></Select>
        </div>

        <div className="inputform">
          <Select name="Status" id="status" options={StatusOptions}></Select>
        </div>

        <div className="inputform">
          <label className="input__label" htmlFor="">
            Address
          </label>
          <input type="text" placeholder="Flat No. / House No." />
          <input type="text" placeholder="Address Line 1" />
          <input type="text" placeholder="Address Line 2" />
          <input type="text" placeholder="Pincode" />
        </div>

        <Input
          name="Employee ID"
          type="text"
          id="empid"
          disabled={isEmpIDDisabled}
          placeholder={empId || "Employee ID"}
          styles={empIDDisabledStyle}
          onChange={(e) => update("empId", e.target.value)}
          // onChange={(event) => update('emplName', event.target.value)}
        ></Input>
      </div>

      <div className="form__buttons">{actionButtons && actionButtons}</div>
    </div>
  );
};

export default EmployeeDetailsForm;
