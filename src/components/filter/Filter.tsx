import React, { useMemo, useState } from 'react'
import "./Filter.css"
import Select from '../select/Select'
import { useParams, useSearchParams } from 'react-router-dom'

type ObjectType = {
    name: string,
    empId: string,
    joiningDate: string,
    role: string,
    status: string,
    exp: string
}


type FilterType = {
  name : string,
  id : string,
  // options : Array<ObjectType>
  filterFunction ?: Function 
  statusFilter ?: string 
}

const Filter = ({name, id,filterFunction, statusFilter } :  FilterType) => {

const statusOptions = [
  { name: "ALL", label: "All" },
  { name: "Active", label: "Active" },
  { name: "Probation", label: "Probation" },
  { name: "Inactive", label: "Inactive" }
];

  return (
    <div className='filter__wrapper'>
        <div className="filter__component">
          <Select name={name} id={id} options={statusOptions} filterFunction = {filterFunction} statusFilter = {statusFilter} styles={{
            backgroundColor : '#EAF9FF',
            border : 'none',
            borderRadius : '50px',
            padding : '4px 10px',
            fontSize : '12px'
          }}></Select>
        </div>
    </div>
  )
}

export default Filter