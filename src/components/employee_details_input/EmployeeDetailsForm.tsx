import React from "react";
import "./EmployeeDetailsForm.css";
import Button from "../button/Button";
import Select from "../select/Select";
import Input from "../input/Input";

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

const EmployeeDetailsForm = () => {
  return (
    <div className="form__container">
      <div className="form">
        <Input name="Employee Name" type="text" id="name"></Input>
        <Input name="Joining Date" type="date" id="joiningdate"></Input>
        <Input name="Experience" type="number" id="exp"></Input>

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

        <Input name="Status" type="text" id="estatusxp"></Input>

        <div className="inputform">
          <label className="input__label" htmlFor="">
            Address
          </label>
          <input type="text" placeholder="Flat No. / House No." />
          <input type="text" placeholder="Address Line 1" />
          <input type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div className="form__buttons">
        <Button
          style={{
            backgroundColor: "#03AEEE",
            color: "#fff",
            padding: "10px 5rem",
            fontSize: "18",
          }}
        >
          Create
        </Button>
        <Button
          style={{
            //  backgroundColor: "#03AEEE",
            // color: "#fff",
            padding: "10px 5rem",
            fontSize: "18",
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EmployeeDetailsForm;
