import "./Filter.css"
import FilterSelect from '../filterselect/FilterSelect'

type FilterType = {
  name : string,
  id : string,
  filterFunction ?: Function 
  statusFilter ?: string 
}

const Filter = ({name, id,filterFunction, statusFilter } :  FilterType) => {

const statusOptions = [
  { name: "ALL", label: "All" },
  { name: "ACTIVE", label: "Active" },
  { name: "PROBATION", label: "Probation" },
  { name: "INACTIVE", label: "Inactive" }
];

  return (
    <div className='filter__wrapper'>
        <div className="filter__component">
          <FilterSelect name={name} id={id} options={statusOptions} filterFunction = {filterFunction} statusFilter = {statusFilter} styles={{
            backgroundColor : '#EAF9FF',
            border : 'none',
            borderRadius : '50px',
            padding : '4px 10px',
            fontSize : '12px'
          }}></FilterSelect>
        </div>
    </div>
  )
}

export default Filter