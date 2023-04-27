import { useRef } from "react"
import ViewEmployees from "./ViewEmployees";

export default function AddEmployee(){
  //getting input data from the form
  const fullNameRef=useRef();
  const phyAddressRef=useRef();
  const emailAddressRef=useRef();
  const phoneContactRef=useRef();
  const jobTitleRef=useRef();
  const salaryRef=useRef();
 
  //function to handle data
  const handleData=()=>{
    // alert(`God is great`)
    const employeeData={
      fullName:fullNameRef.current.value,
      physicalAddress:phyAddressRef.current.value,
      emailAddress:emailAddressRef.current.value,
      phoneContact:phoneContactRef.current.value,
      jobTitle:jobTitleRef.current.value,
      salary:salaryRef.current.value,
    }
    // console.log(employeeData)
  }

  //function to show employee data
  const showEmployee=()=>{
    alert("God is good");
  }
  return(
    <div className="container mt-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add New Employee
          </button>
          <button type="button" className="btn btn-secondary"
            onClick={showEmployee}
          >
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
                        <input type="email" ref={fullNameRef} className="form-control form-control-sm" id="floatingInput"/>
                        <label htmlFor="floatingInput">Full Name</label>
                      </div>
                      <div className="form-floating col-6">
                        <input type="password" ref={phyAddressRef} className="form-control" id="floatingPassword"/>
                        <label htmlFor="floatingPassword">Physical Address</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-floating mb-3 col-6">
                        <input type="email" ref={emailAddressRef} className="form-control" id="floatingInput"/>
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating col-6">
                        <input type="password" ref={phoneContactRef} className="form-control" id="floatingPassword"/>
                        <label htmlFor="floatingPassword">Phone Contact</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-floating mb-3 col-6">
                        <input type="email" ref={jobTitleRef} className="form-control" id="floatingInput"/>
                        <label htmlFor="floatingInput">Job Title</label>
                      </div>
                      <div className="form-floating col-6">
                        <input type="password" ref={salaryRef} className="form-control" id="floatingPassword"/>
                        <label htmlFor="floatingPassword">Salary</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
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