import React, { useState } from "react";
import "./TableRow.css";
import Status from "../../../../components/status/Status";
import { Button } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import PopUpModal from "../../../../components/popupmodal/PopUpModal";
import { preconnect } from "react-dom";
import { EMPLOYEE_ACTION_TYPES } from "../../../../store/employee/employee.types";
import { useDispatch } from "react-redux";
import { useDeleteEmployeeMutation } from "../../../../api-services/employees/employees.api";
import toast, { Toaster } from "react-hot-toast";

const statusColors: { [key: string]: string } = {
  ACTIVE: "#C8E6C9", // light green
  PROBATION: "#FFF9C4", // light yellow
  INACTIVE: "#FFCDD2", // light red
};

type EmployeeType = {
  id: number;
  name: string;
  empId: string;
  joiningDate: string;
  role: string;
  status: string;
  exp: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const TableRow = ({
  id,
  name,
  empId,
  joiningDate,
  role,
  status,
  exp,
  onClick,
}: EmployeeType) => {
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const navigator = useNavigate();
  // console.log("name", name);
  // const dispatch = useDispatch();
  //   const openDeletePopup = (e: React.MouseEvent) => {
  //     e.stopPropagation();
  //     setDeletePopup(true);
  //   };

  //   const closeDeletePopup = () => {
  //     setDeletePopup(false);
  //   };

  //   const confirmDelete = () => {
  //     setDeletePopup((prev) => !prev);
  //   };

  const handleDeleteEmployee = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigator("/login");
    }
    console.log(id);
    deleteEmployee({ id })
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success('Employee Deleted', {
          icon : '🗑️'
        })
        setDeletePopup((prev) => !prev);
      });
  };
  return (
    <>
       <Toaster position="top-right" 
    />
      <div className="row_wrapper" onClick={onClick}>
     
        <p>{name}</p>
        <p>{empId}</p>
        <p>{joiningDate}</p>
        <p>{role}</p>
        <Status
          title={status}
          styles={{
            backgroundColor: statusColors[status] || "#E0E0E0",
            margin: "0 auto",
          }}
        ></Status>
        <p>{exp}</p>
        {/* //action buttons  */}
        <div className="action__buttons">
          <Button
            style={{
              backgroundColor: "white",
              border: "none",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setDeletePopup((prev) => !prev);
            }}
          >
            <img src="/deleteicon.svg" width={18} />
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              border: "none",
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigator(`/employee/edit/${id}`);
            }}
          >
            <img src="/editicon.svg" width={18} />
          </Button>
        </div>
      </div>

      {deletePopup && (
        <PopUpModal
          iconPath="/closeicon.svg"
          title="Are you sure ?"
          description="Do you really want to delete employee ?"
          actionButtons={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#03AEEE",
                  color: "white",
                  padding: "6px 14px",
                  borderRadius: "0px",
                  fontWeight: "600",
                  border: "1px solid #03AEEE",
                }}
                // onClick={(e) => {
                //   e.preventDefault();
                //   const res = dispatch({
                //     type: EMPLOYEE_ACTION_TYPES.DELETE,
                //     payload: empId,
                //   });
                //   console.log(res);
                //   setDeletePopup((prev) => !prev)
                // }}
                onClick={handleDeleteEmployee}
              >
                Confirm
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#63667A",
                  padding: "6px 14px",
                  borderRadius: "0px",
                  border: "1px solid #63667A",
                  fontWeight: "600",
                }}
                onClick={() => {
                  setDeletePopup((prev) => !prev);
                }}
              >
                Cancel
              </Button>
            </div>
          }
        />
      )}
    </>
  );
};

export default TableRow;
