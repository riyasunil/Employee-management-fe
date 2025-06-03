import Title from "../../components/title/Title";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeDetail from "./components/EmployeeDetail";
import "./EmployeeDetailPage.css";
import TitleButton from "../../components/titleButton/TitleButton";
import { useAppSelector } from "../../store/store";
import { useGetEmployeeListQuery } from "../../api-services/employees/employees.api";

const EmployeeDetailPage = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  console.log(id);

  // const globalEmp = useAppSelector((state) => state.employee.employees);
      const {data} = useGetEmployeeListQuery({});
      const globalEmp = data;
  console.log(globalEmp);
  const employee = globalEmp.find(
    (emp: { employeeId: string | undefined }) => emp.employeeId === id
  );

  console.log("employee", employee);

  if (!employee) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Employee not found</h2>
      </div>
    );
  }

  const handleTitleButtonClick = () => {
    navigator(`/employee/edit/${employee.id}`);
  };
  return (
    <div className="employeedetailpage_wrapper">
      <Title
        title="Employee Detail"
        actionButtonComponent={
          <TitleButton
            iconPath="/editicon-white.svg"
            label="Edit"
            onClick={handleTitleButtonClick}
          />
        }
      />
      <EmployeeDetail
        name={employee.name}
        empId={employee.employeeId}
        dateOfJoining={new Date(employee.dateOfJoining).toLocaleDateString()}
        role={employee.role}
        status={employee.status}
        departmentName={employee.department.name}
        exp={employee.experience}
        address={`${employee.address.houseNo}, ${employee.address.line1}, ${employee.address.line2}, ${employee.address.pincode}`}
      />
    </div>
  );
};

export default EmployeeDetailPage;
