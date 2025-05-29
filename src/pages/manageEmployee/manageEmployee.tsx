// import "../createEmployee/Employee.css";
import EmployeeDetailsForm from "../../components/employeedetailsform/EmployeeDetailsForm";
import Title from "../../components/title/Title";
import { Button } from "../../components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { employeeList } from "../../constants/EmployeeList";

const ManageEmployee = () => {
  const [values, setValues] = useState({
    id: 0,
    email: "",
    employeeName: "",
    joiningDate: "",
    experience: "",
    department: "",
    role: "",
    status: "",
    address: "",
    empId: "",
  });
  const { id } = useParams();
  const employee = employeeList.find((emp) => emp.empId === id);
  useEffect(() => {
    if (id && employee) {
      setValues({
        id: employee.id,
        employeeName: employee.name || "",
        email: employee.email || "",
        empId: employee.empId || "",
        joiningDate: employee.joiningDate || "",
        experience: employee.exp || "",
        department: employee.department || "",
        role: employee.role || "",
        status: employee.status || "",
        address: employee.address || "",
      });
    }
  }, [id]);
  const navigator = useNavigate();
  const location = useLocation();
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

  const updateField = (field: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (!employee && currentRoute === "edit") {
      navigator("/");
    }
  }, [employee, navigator]);

  return (
    <div className="employee_container">
      <Title title={title} />
      <EmployeeDetailsForm
        update={updateField}
        name={employee?.name}
        email={employee?.email}
        empId={employee?.empId}
        joiningDate={employee?.joiningDate}
        role={employee?.role}
        status={employee?.status}
        exp={employee?.exp}
        address={employee?.address}
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
              onClick={() => {
                console.log(values);
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
