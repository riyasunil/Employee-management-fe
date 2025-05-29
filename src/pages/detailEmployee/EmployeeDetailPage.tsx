import React from "react";
import Title from "../../components/title/Title";
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeDetail from "./components/EmployeeDetail";
import "./EmployeeDetailPage.css"
import TitleButton from "../../components/titleButton/TitleButton";

const employeeList = [
  {
    name: "Alice Johnson",
    empId: "EMP001",
    joiningDate: "2022-03-15",
    role: "Frontend Developer",
    status: "Active",
    exp: "3 years",
    address: "123 Main Street, Springfield",
        email : "difdr@gmail.com"

  },
  {
    name: "Michael Smith",
    empId: "EMP002",
    joiningDate: "2021-11-20",
    role: "Backend Engineer",
    status: "Probation",
    exp: "1 year",
    address: "456 Pine Avenue, Metropolis"
  },
  {
    name: "Priya Kumar",
    empId: "EMP003",
    joiningDate: "2019-07-05",
    role: "Project Manager",
    status: "Active",
    exp: "5 years",
    address: "789 Oak Road, Newtown"
  },
  {
    name: "David Lee",
    empId: "EMP004",
    joiningDate: "2023-01-10",
    role: "UI/UX Designer",
    status: "Active",
    exp: "2 years",
    address: "101 River Street, Oldtown"
  }
];

const EmployeeDetailPage = () => {

    const { id } = useParams();
    const navigator = useNavigate();
    console.log(id)
  const employee = employeeList.find(emp => emp.empId === id);

  if (!employee) {
    return <div style={{ padding: '20px' }}><h2>Employee not found</h2></div>;
  }

  const handleTitleButtonClick=()=>{
    navigator(`/employee/edit/${employee.empId}`);
  };
  return (
    <div className="employeedetailpage_wrapper">
              <Title title="Employee Detail" actionButtonComponent={<TitleButton  iconPath="/editicon-white.svg" label="Edit" onClick={handleTitleButtonClick}/>}/>
  <EmployeeDetail name={employee.name} empId={employee.empId} joiningDate={employee.joiningDate} role={employee.role} status={employee.status} exp={employee.exp} address={employee.address}/>

    </div>
)
};

export default EmployeeDetailPage;
