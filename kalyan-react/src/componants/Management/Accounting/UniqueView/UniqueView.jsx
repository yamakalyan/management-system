import { Outlet, useNavigate, useParams } from "react-router-dom";

const UniqueView = () => {
  const navigator = useNavigate();
  const params = useParams();
  const ifStudentParams = params.type === "fees" ? "student" : params.type

  const handleOutletRoute = (e) => {
    e.preventDefault();
    const value = e.target.value;
    navigator(`/search/${params.type}/123456/${value}`);
  };

  return (
    <div>
      <div className="container py-5 my-4">
        <div className="row bg-light shadow-sm rounded rouded-5">
          <div className="col-md-4 col-sm-6">
            <img
              src={
                ifStudentParams === "fees"
                  ? "/Learning-bro.svg"
                  : "/Professor-pana.svg"
              }
              className="img-fluid"
            />
          </div>
          <div className="col-md py-4 col-sm-6">
            <div className="d-flex justify-content-around">
              <div>
                <h3 className="text-primary fw-normal">
                  <i className="bi bi-person-rolodex"></i>
                  <span>
                    {" "}
                    {ifStudentParams === "salaries" ? "Teacher" : ifStudentParams === "fees" ? "Student" :  ifStudentParams} Profile
                    Details
                  </span>
                </h3>
              </div>
              <div className="my-auto">
                <i className="bi bi-pencil-square h4 mx-2 text-primary"></i>
                <i className="bi bi-trash mx-2 h4 text-danger"></i>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md col-lg mb-3">
                <h5 className="fw-normal">Full name : Kalyan yama</h5>
                <h5 className="fw-normal">Gender : Male</h5>
                <h5 className="fw-normal">DOB : 20-07-2000</h5>
                <h5 className="fw-normal">Father name : Gangadas yama</h5>
                <h5 className="fw-normal">Mother name : Sumalatha yama</h5>
                <h5 className="fw-normal">Mobile : +91 95500 49382</h5>
              </div>
              <div className="col-md col-lg mb-3">
                <h5 className="fw-normal">Admission ID : AD12435326436</h5>
                <h5 className="fw-normal">Present Class : 1st Class</h5>
                <h5 className="fw-normal">Section : A</h5>
                <br />
                <h5 className="fw-normal">Attendance</h5>
                <div className="">
                  <span className="fw-bold text-success">Present : 125</span>
                  <span className="mx-1">|</span>
                  <span className="fw-bold text-danger">Absent : 50</span>
                  <span className="mx-1">|</span>
                  <span className="fw-bold text-primary">Total Days : 175</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" row mt-4 py-3 row-cols-1 row-cols-md-2">
          <div className="col mb-2">
            <h4 className="fw-normal">
              * Showing {ifStudentParams} {params.list} results
            </h4>
          </div>
          <div className="col mb-2">
            <div>
              <select className="form-select" onChange={handleOutletRoute}>
                <option value="">Select result type...</option>
                <option value="payments">Payments</option>
                <option value="transactions">
                  Transactions
                </option>
                {ifStudentParams === "student" && (
                  <option value="classreports">ClassReports</option>
                )}
              </select>
            </div>
          </div>
        </div>

        <div className="row py-2 row-cols-1 row-cols-sm-1 row-cols-md-1">
          <div className="col mb-3 table-responsive ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueView;
