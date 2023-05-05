import { useEffect,useState} from "react";
import axiosClient from "../axio_client";
import { useParams,Link} from "react-router-dom";
import AddEmployee from "./AddEmployee";

 const  EditEmployee=()=>{

  const [employees,setEmployees]=useState(null);
  const [message,setMessage]=useState(null);
  
    useEffect(()=>{
      getEmployee();
    },[]);
    const id=useParams();
  //get employee data from the server side
   const getEmployee= async ()=>{
    await axiosClient.get(`/api.php?id=${id.id}`)
    .then((response)=>{
      setEmployees(...response.data)
    })
    .catch((error)=>console.log(error))
  }
  
 

  //function to collect updated data
  const getData=(event)=>{
    const field_name=event.target.name;
    const value=event.target.value;
    setEmployees((values)=>({...values,[field_name]:value}));
  }
  //function to handle data
  const handleData=()=>{
    console.log(employees);
       //sending updated data to the api
     axiosClient.put("/api",employees)
      .then((response)=>{
       console.log(response.data)
         setMessage(response.data);
      })
      .catch((error)=>console.log(error));

     
  }

  const navigate=()=>{
    useNavigate("/");
    console.log("Hi there");
  }

  if(employees !==null){
  return (
    <div className="container mt-3">
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Edit Employee
        </button>
        <Link to='/' element={<AddEmployee/>} className="btn btn-success btn-sm">Back?</Link>
      </div>
      <div className="card-body">
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Employee</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  
                  <div className="row">
                    
                    <div className="form-floating mb-3 col-6">
                      <input type="text" value={employees.fullName}  name="fullName" className="form-control form-control-sm" id="floatingInput"
                        onChange={getData}
                      />
                      <label htmlFor="floatingInput">Full Name</label>
                    </div>
                    <div className="form-floating col-6">
                      <input type="text" value={employees.physicalAddress} name="physicalAddress" className="form-control" id="floatingAddress"
                        onChange={getData}
                      />
                      <label htmlFor="floatingAddress">Physical Address</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-floating mb-3 col-6">
                      <input type="email" value={employees.email} name="email" className="form-control" id="floatingInput"
                        onChange={getData}
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating col-6">
                      <input type="text" value={employees.phoneContact} name="phoneContact" className="form-control" id="floatingContact"
                        onChange={getData}
                      />
                      <label htmlFor="floatingContact">Phone Contact</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-floating mb-3 col-6">
                      <input type="text" value={employees.jobTitle} name="jobTitle" className="form-control" id="floatingInput"
                        onChange={getData}
                      />
                      <label htmlFor="floatingInput">Job Title</label>
                    </div>
                    <div className="form-floating col-6">
                      <input type="text" value={employees.salary} name="salary" className="form-control" id="floatingPassword"
                        onChange={getData}
                      />
                      <label htmlFor="floatingPassword">Salary</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <span className="text-success">{message?message.message:""}</span>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary"
                  onClick={handleData}
                >
                  Update User
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
}

export default EditEmployee;