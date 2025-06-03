import React, { useMemo, useState } from "react";
import Title from "../../components/title/Title";
import "./ListEmployees.css";
import { EmployeeDetailsForm } from "../../components";
import TableRow from "./components/tableRow/TableRow";
import TableTitle from "./components/tableTitle/TableTitle";
import Filter from "../../components/filter/Filter";
import TitleButton from "../../components/titleButton/TitleButton";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { Employee, EmployeeState } from "../../store/employee/employee.types";
import { useAppSelector } from "../../store/store";
import { useGetEmployeeListQuery } from "../../api-services/employees/employees.api";

const ListEmployees = () => {
  // const [searchParams, setSearchParams] = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const navigator = useNavigate();

    const {data} = useGetEmployeeListQuery({});
    const globalEmp = data;
  const statusFilter = searchParams.get("status") || "ALL";

  // const globalEmp = useAppSelector((state) => state.employee.employees)
  // console.log(globalEmp)

  const filteredEmployees = useMemo(() => {
     if (!globalEmp) return [];
    if (statusFilter === "ALL") {
      console.log("filtered", globalEmp)
      return globalEmp;
    }
    return globalEmp?.filter((employee: Employee) => employee.status === statusFilter);
  }, [globalEmp, statusFilter]);

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
      {filteredEmployees && filteredEmployees.length>0 ?
        filteredEmployees.map((emp: Employee, index: React.Key | null | undefined) => (
          <TableRow
            id = {emp.id}
            key={index}
            name={emp.name}
            empId={emp.employeeId}
            joiningDate={new Date(emp.dateOfJoining).toLocaleDateString()}
            role={emp.role}
            status={emp.status}
            exp={emp.experience}
            onClick={() => {
              navigator(`/employee/${emp.employeeId}`);
            }}
          />
        )): (
          <p>No Records To Display</p>
        )}
    </div>
  );
};

export default ListEmployees;
