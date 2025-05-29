import "./TableTitle.css"

const TableTitle = () => {
  return (
    <div className='title_wrapper'>
        <p>Name</p>
        <p>Employee Id</p>
        <p>Joining Date</p>
        <p>Role</p>
        <p>Status</p> 
        <p>Experience</p>
        {/* //action buttons  */}
        <p>Actions</p>
    </div>
  )
}

export default TableTitle