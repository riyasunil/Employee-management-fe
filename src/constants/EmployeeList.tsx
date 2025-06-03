import {
  EmployeeStatus,
  type Employee,
  type EmployeeState,
} from "../store/employee/employee.types";

export const employeeList = [
  {
    id: 1,
    name: "Alice Johnson",
    empId: "EMP001",
    dateOfJoining: "2022-03-15",
    role: "Frontend Developer",
    status: "Active",
    exp: "3 years",
    address: {
      houseNo: "1",
      line1: "line1",
      line2: "line2",
      pincode: "12345",
    },
    email: "difdr@gmail.com",
    departmentId: "HR",
    password : "sfnrkjbfe",
    age : 21
  },
  {
    id: 2,
    name: "Michael Smith",
    empId: "EMP002",
    dateOfJoining: "2021-11-20",
    role: "Backend Engineer",
    status: "Probation",
    exp: "1 year",
    address: {
      houseNo: "1",
      line1: "line1",
      line2: "line2",
      pincode: "12345",
    },
    departmentId: "HR",
  },
  {
    id: 3,
    name: "Priya Kumar",
    empId: "EMP003",
    dateOfJoining: "2019-07-05",
    role: "Project Manager",
    status: "Active",
    exp: "5 years",
    address: {
      houseNo: "1",
      line1: "line1",
      line2: "line2",
      pincode: "12345",
    },
    departmentId: "HR",
  },
  {
    id: 4,
    name: "David Lee",
    empId: "EMP004",
    dateOfJoining: "2023-01-10",
    role: "UI/UX Designer",
    status: "Active",
    exp: "2 years",
    address: {
      houseNo: "1",
      line1: "line1",
      line2: "line2",
      pincode: "12345",
    },
    departmentId: "HR",
  },
];

// const address = ;

export const globalEmployeeList: Employee[] = [
  {
    id : 57,
    employeeId: "EMP005",
    email: "new@emial.com",
    name: "ria",
    age: 21,
    address: {
      houseNo: "1",
      line1: "lie1",
      line2: "line2",
      pincode: "123456",
    },
    password: "djfndr",
    role: "HR",
    dateOfJoining: "01-03-22",
    experience: 3,
    status: EmployeeStatus.ACTIVE,
    departmentId: 1,
  },
];
