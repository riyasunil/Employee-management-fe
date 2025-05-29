import React, { useMemo, useState } from "react";
import Title from "../../components/title/Title";
import "./ListEmployees.css";
import { EmployeeDetailsForm } from "../../components";
import TableRow from "./components/tableRow/TableRow";
import TableTitle from "./components/tableTitle/TableTitle";
import Filter from "../../components/filter/Filter";
import TitleButton from "../../components/titleButton/TitleButton";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ListEmployees = () => {
  // const [searchParams, setSearchParams] = useParams();
  const employeeList = [
    {
      name: "Alice Johnson",
      empId: "EMP001",
      joiningDate: "2022-03-15",
      role: "Frontend Developer",
      status: "Active",
      exp: "3 years",
      email: "difdr@gmail.com",
    },
    {
      name: "Michael Smith",
      empId: "EMP002",
      joiningDate: "2021-11-20",
      role: "Backend Engineer",
      status: "Probation",
      exp: "1 year",
    },
    {
      name: "Priya Kumar",
      empId: "EMP003",
      joiningDate: "2019-07-05",
      role: "Project Manager",
      status: "Active",
      exp: "5 years",
    },
    {
      name: "David Lee",
      empId: "EMP004",
      joiningDate: "2023-01-10",
      role: "UI/UX Designer",
      status: "Active",
      exp: "2 years",
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const navigator = useNavigate();

  const statusFilter = searchParams.get("status") || "ALL";

  const filteredEmployees = useMemo(() => {
    if (statusFilter === "ALL") {
      return employeeList;
    }
    return employeeList?.filter((employee) => employee.status === statusFilter);
  }, [employeeList, statusFilter]);

  const handleStatusFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const status = e.target.value;
    console.log(status);
    const newSearchParams = new URLSearchParams(searchParams);

    if (status === "ALL") {
      newSearchParams.delete("status");
    } else {
      newSearchParams.set("status", status);
    }

    setSearchParams(newSearchParams);
    setDropDownOpen(false);
  };

  const handleTitleButtonClick = () => {
    navigator("/employee/create");
  };

  return (
    <div className="employee_container">
      <Title
        title="List Employees"
        filterComponent={
          <Filter
            name="Filter By"
            id="filterby"
            filterFunction={handleStatusFilterChange}
            statusFilter={statusFilter}
          />
        }
        actionButtonComponent={
          <TitleButton
            iconPath="/plusicon.svg"
            label="Create Employee"
            onClick={handleTitleButtonClick}
          />
        }
      />
      <TableTitle />
      {filteredEmployees &&
        filteredEmployees.map((emp, index) => (
          <TableRow
            key={index}
            name={emp.name}
            empId={emp.empId}
            joiningDate={emp.joiningDate}
            role={emp.role}
            status={emp.status}
            exp={emp.exp}
            onClick={() => {
              navigator(`/employee/${emp.empId}`);
            }}
          />
        ))}
    </div>
  );
};

export default ListEmployees;
