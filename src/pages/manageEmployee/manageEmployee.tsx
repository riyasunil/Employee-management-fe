import EmployeeDetailsForm from "../../components/employeedetailsform/EmployeeDetailsForm";
import Title from "../../components/title/Title";
import { Button } from "../../components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  EmployeeRole,
  EmployeeStatus,
  type Employee,
  type Role,
  type Status,
} from "../../store/employee/employee.types";
import { useAppDispatch } from "../../store/store";
import {
  useCreateEmployeeMutation,
  useGetEmployeeListQuery,
  useUpdateEmployeeMutation,
} from "../../api-services/employees/employees.api";
import toast, { Toaster } from "react-hot-toast";

const ManageEmployee = () => {
  const [values, setValues] = useState<Employee>({
    id: 0,
    email: "",
    name: "",
    dateOfJoining: "",
    experience: 0,
    departmentId: "",
    role: EmployeeRole.DEV,
    status: EmployeeStatus.PROBATION,
    address: {
      houseNo: "",
      line1: "",
      line2: "",
      pincode: "",
    },
    employeeId: "",
    age: 0,
    password: "",
  });

  const navigator = useNavigate();
  const location = useLocation();

  const [createEmployee] = useCreateEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();

  const { id } = useParams();

  const { data: employees } = useGetEmployeeListQuery({});
  const employee = employees?.find((emp: Employee) => emp.id == Number(id));

  function parseRole(role: string): Role {
    return Object.values(EmployeeRole).includes(role as Role)
      ? (role as Role)
      : EmployeeRole.DEV;
  }

  function parseStatus(status: string): Status {
    return Object.values(EmployeeStatus).includes(status as Status)
      ? (status as Status)
      : EmployeeStatus.INACTIVE;
  }

  let basePath = location.pathname;
  if (basePath.startsWith("/employee/edit")) basePath = "/employee/edit";
  if (basePath.startsWith("/employee/create")) basePath = "/employee/create";

  const routeConfig: {
    [key: string]: {
      currentRoute: string;
      title: string;
      confirmText: string;
      cancelText: string;
    };
  } = {
    "/employee/create": {
      currentRoute: "create",
      title: "Create Employee",
      confirmText: "Confirm",
      cancelText: "Cancel",
    },
    "/employee/edit": {
      currentRoute: "edit",
      title: "Edit Employee",
      confirmText: "Save",
      cancelText: "Cancel",
    },
  };

  const { currentRoute, title, confirmText, cancelText } = routeConfig[
    basePath
  ] || {
    currentRoute: "Undefined",
    title: "Default",
    confirmText: "Submit",
    cancelText: "Cancel",
  };

  const updateField = (field: keyof Employee, value: string | number) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressChange = (field: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  const handleEditEmployee = async () => {
    const cleanAddress = {
      houseNo: values.address.houseNo,
      line1: values.address.line1,
      line2: values.address.line2,
      pincode: values.address.pincode,
    };

    const updateBody = {
      name: values.name,
      email: values.email,
      role: values.role,
      address: cleanAddress,
      status: values.status,
      departmentId: values.departmentId,
      password: values.password,
      age: values.age,
      dateOfJoining: values.dateOfJoining,
      experience: values.experience,
    };

    console.log("id", id);
    console.log("updatebody", updateBody);
    updateEmployee({ id, updateBody })
      .unwrap()
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("Employee Updated", {
            icon: "✅",
          });
          navigator("/employee");
        }
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };

  const handleCreateEmployee = async () => {
    console.log(values);
    const { id, ...createEmployeeBody } = values;
    createEmployee(createEmployeeBody)
      .unwrap()
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("Employee Created", {
            icon: "✅",
          });
          navigator("/employee");
        }
      });
  };

  useEffect(() => {
    console.log("here", id, employee);
    if (id && employee) {
      setValues({
        id: employee.id || 0,
        name: employee.name || "",
        email: employee.email || "",
        employeeId: employee.employeeId || "",
        dateOfJoining: employee.dateOfJoining || "",
        experience: Number(employee.experience) || 0,
        departmentId: employee.department.id || "",
        role: parseRole(employee.role) || EmployeeRole.DEV,
        status: parseStatus(employee.status) || EmployeeStatus.INACTIVE,
        address: employee.address || {
          houseNo: "",
          line1: "",
          line2: "",
          pincode: "",
        },
        age: employee.age || 0,
        password: employee.password || "",
      });
    }
  }, [id, employee]);

  useEffect(() => {
    console.log("values has been set", values);
  }, [values]);

  return (
    <div className="employee_container">
      <Toaster position="top-right" />
      <Title title={title} />
      <EmployeeDetailsForm
        createEmployee={handleCreateEmployee}
        update={updateField}
        updateAddress={handleAddressChange}
        name={values.name}
        email={values.email}
        empId={values.employeeId}
        dateOfJoining={values.dateOfJoining}
        role={values.role}
        status={values.status}
        exp={values.experience}
        age={values.age}
        departmentId={values.departmentId as string}
        password={values.password}
        address={values.address}
        empIDDisabledStyle={
          currentRoute === "create"
            ? { cursor: "text" }
            : { cursor: "not-allowed" }
        }
        isEmpIDDisabled={currentRoute === "create" ? false : true}
        actionButtons={
          <>
            <Button
              style={{
                backgroundColor: "#03AEEE",
                color: "#fff",
                padding: "10px 5rem",
                fontSize: "18",
              }}
              onClick={(e) => {
                // write function to dispacth add action
                // e.preventDefault();
                // console.log(values);
                // const res = dispatch(addEmployee(values));
                // console.log(res);
                // navigator("/employee");
                if (basePath.startsWith("/employee/edit")) {
                  console.log("inside edit");
                  handleEditEmployee();
                } else if (basePath.startsWith("/employee/create")) {
                  //handle creation api
                  console.log("hereeee");
                  handleCreateEmployee();
                }
              }}
            >
              {confirmText}
            </Button>
            <Button
              style={{
                padding: "10px 5rem",
                fontSize: "18",
              }}
              onClick={() => {}}
            >
              {cancelText}
            </Button>
          </>
        }
      />
    </div>
  );
};

export default ManageEmployee;
