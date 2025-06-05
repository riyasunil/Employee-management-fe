import { useGetEmployeeListQuery } from '../../api-services/employees/employees.api';
import EmployeeDetail from '../detailEmployee/components/EmployeeDetail';
import "./profileEmployee.css"
const EmployeeProfile = () => {
  const userId = localStorage.getItem('userId');
  console.log(userId)
  const { data: globalEmp, isLoading, isError } = useGetEmployeeListQuery({});

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching employee data</p>;
    console.log(globalEmp)
  const employee = globalEmp?.find(
    (emp: { id: string }) => emp.id == userId
  );

  console.log(employee)
  if (!employee) return <p>Employee not found</p>;



  return (
    <div className = "profile__Container">
    <div className="profile__card">
         <img src="/profile1.svg" alt="" className='profilecard__img'/>
    <p>{employee.name}</p>
    <div className="profile__content">
        <p>{employee.id}</p>
        <p>{employee.dateOfJoining}</p>
        <p>{employee.role}</p>
        <p>{employee.status}</p>
        <p>{employee.experience}</p>
    </div>
    </div>
   
    </div>
   
  );
};

export default EmployeeProfile;
