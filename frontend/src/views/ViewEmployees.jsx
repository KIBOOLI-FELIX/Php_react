import { Link } from "react-router-dom";
import { useEffect,useState} from "react";
import axiosClient from "../axio_client";


const ViewEmployees=()=>{
const [employees,setEmployees]=useState([]);
const [message,setMessage]=useState(null);
  
    useEffect(()=>{
      getEmployee();
    },[])
  //get employee data from the server side
  const getEmployee=()=>{
    axiosClient.get("/api")
    .then((response)=>{
      setEmployees(response.data)
    })
    .catch((error)=>console.log(error))
  }

  //funtion to delete user
  const deleteUser=(id)=>{
    axiosClient.delete(`/api?id=${id}`).then((response)=>{
      console.log(response.data);
      setMessage(response.data);
      getEmployee();
    })
  }
 
  return(
    <div className="container">
      <h1 className="text-center text-success">List of Available Employee Data</h1>
      <span className="text-warning">{message?message.message:""}</span>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th> Name</th>
            <th> Title</th>
            <th> Email</th>
            <th> Salary</th>
            <th> Phone Contact</th>
            <th>Phyical Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee,key)=>{
            return(
            <tr key={key}>
              <td>{employee.id}</td>
              <td>{employee.fullName}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>{employee.phoneContact}</td>
              <td>{employee.physicalAddress}</td>
              <td className="d-flex justify-content-between">
              <Link to={`employ/${employee.id}/edit`} className="btn btn-warning btn-sm">Edit</Link>
              <button onClick={()=>deleteUser(employee.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default ViewEmployees;