import {useState} from "react"
import ViewEmployees from "./ViewEmployees";
import axiosClient from "../axio_client";


export default function AddEmployee(){
  const[payload,setPayload]=useState([]);
  const[message,setMessage]=useState({});

  //function to collect data
  const getData=(event)=>{
    const field_name=event.target.name;
    const value=event.target.value;
    setPayload((values)=>({...values,[field_name]:value}));
  }
  //function to handle send data
  const handleData=()=>{
    console.log(payload)
    //sending data to the api
    axiosClient.post("/api",payload)
    .then((response)=>{
      console.log(response.data)
      setMessage(response.data);
      
    })
    .catch((error)=>console.log(error));
 
  }



  return(
    <div className="container mt-3">
  
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add New Employee
          </button>
          <button type="button" className="btn btn-secondary">
            View Employees
          </button>
        </div>
        <div className="card-body">
           <ViewEmployees/>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Add New User</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="form-floating mb-3 col-6">
                        <input type="email" name="fullName" className="form-control form-control-sm" id="floatingInput"
                          onChange={getData}
                        />
                        <label htmlFor="floatingInput">Full Name</label>
                      </div>
                      <div className="form-floating col-6">
                        <input type="text" name="phyAddress" className="form-control" id="floatingAddress"
                          onChange={getData}
                        />
                        <label htmlFor="floatingAddress">Physical Address</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-floating mb-3 col-6">
                        <input type="email" name="emailAddress" className="form-control" id="floatingInput"
                          onChange={getData}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating col-6">
                        <input type="text" name="phoneContact" className="form-control" id="floatingContact"
                          onChange={getData}
                        />
                        <label htmlFor="floatingContact">Phone Contact</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-floating mb-3 col-6">
                        <input type="text" name="jobTitle" className="form-control" id="floatingInput"
                          onChange={getData}
                        />
                        <label htmlFor="floatingInput">Job Title</label>
                      </div>
                      <div className="form-floating col-6">
                        <input type="text" name="salary" className="form-control" id="floatingPassword"
                          onChange={getData}
                        />
                        <label htmlFor="floatingPassword">Salary</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <span className="text-success">{message.message}</span>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary"
                    onClick={handleData}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}