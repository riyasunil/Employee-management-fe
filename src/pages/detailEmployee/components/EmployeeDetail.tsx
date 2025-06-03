import React from "react";
import { useParams } from "react-router-dom";
import "./EmployeeDetail.css";
import Status from "../../../components/status/Status";


const statusColors: { [key: string]: string } = {
  ACTIVE: "#C8E6C9",       // light green
  PROBATION: "#FFF9C4",    // light yellow
  INACTIVE: "#FFCDD2",     // light red
};

type EmployeeType = {
    name: string,
    empId: string,
    dateOfJoining: string,
    role: string,
    status: string,
    exp: number
    address : string,
    departmentName ?: string
}


const EmployeeDetail = ({
  name,
  dateOfJoining,
  exp,
  role,
  status,
  address,
  empId,
  departmentName
} : EmployeeType) => {
  // const { id } = useParams();
  // console.log(departmentId)
  return (
    <div className="employeedetails__container">
        <div className="employee_content_details">
          <p>Employee Name</p>
          <p>{name}</p>
        </div>
        <div className="employee_content_details">
          <p>Joining Date</p>
          <p>{dateOfJoining}</p>
        </div>
        <div className="employee_content_details">
          <p>Experience</p>
          <p>{exp}</p>
        </div>
        <div className="employee_content_details">
          <p>Department</p>
          <p>{departmentName}</p>
        </div>
        <div className="employee_content_details">
          <p>Role</p>
          <p>{role}</p>
        </div>
        <div className="employee_content_details">
          <p>Status</p>
          <Status title={status} styles={{backgroundColor : statusColors[status] || "#E0E0E0", }}></Status>
        </div>
        
        <div className="employee_content_details">
          <p>Employee ID</p>
          <p>{empId}</p>
        </div>
        <hr className="divider" />
        <div className="employee_content_details">
          <p>Address</p>
          <p>{address}</p>
        </div>
      </div>
  );
};

export default EmployeeDetail;
