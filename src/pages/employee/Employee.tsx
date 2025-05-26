import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Employee.css"
import Header from '../../components/header/Header'
import EmployeeDetailsForm from '../../components/employee_details_input/EmployeeDetailsForm'
import Layout from '../../components/layout/Layout'
import Title from '../../components/title/Title'

const Employee = () => {
  return (
    <div className='employee_container'>
    <Layout >
      <Title  title='Create Employee'/>
      <EmployeeDetailsForm />
    </Layout>
    </div>
  )
}

export default Employee