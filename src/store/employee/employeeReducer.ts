import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { globalEmployeeList } from "../../constants/EmployeeList";
import {
  type Employee,
  type EmployeeState,
} from "./employee.types";

const initialState: EmployeeState = {
  employees: globalEmployeeList,
};

export const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
