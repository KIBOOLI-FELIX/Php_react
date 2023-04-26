export default function AddEmployee(){
  return(
    <div className="container mt-3">
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add New Employee
    </button>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add New User</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div class="form-floating mb-3 col-6">
                  <input type="email" class="form-control form-control-sm" id="floatingInput"/>
                  <label for="floatingInput">Full Name</label>
                </div>
                <div class="form-floating col-6">
                  <input type="password" class="form-control" id="floatingPassword"/>
                  <label for="floatingPassword">Physical Address</label>
                </div>
              </div>
              <div className="row">
                <div class="form-floating mb-3 col-6">
                  <input type="email" class="form-control" id="floatingInput"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating col-6">
                  <input type="password" class="form-control" id="floatingPassword"/>
                  <label for="floatingPassword">Phone Contact</label>
                </div>
              </div>
              <div className="row">
                <div class="form-floating mb-3 col-6">
                  <input type="email" class="form-control" id="floatingInput"/>
                  <label for="floatingInput">Designation</label>
                </div>
                <div class="form-floating col-6">
                  <input type="password" class="form-control" id="floatingPassword"/>
                  <label for="floatingPassword">Salary</label>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Add User</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}