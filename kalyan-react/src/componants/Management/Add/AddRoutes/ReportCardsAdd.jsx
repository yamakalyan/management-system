import { useLocation } from "react-router-dom";

const ReportCardsAdd = () => {
  const location = useLocation();
  const trimAdd = location.pathname.replace("/add/", "");
  return (
    <div>
      <div>
        <div className="container py-3" data-aos="zoom-in">
          <div>
            <h1 className="text-success font-monospace h2 text-center">
              Create {trimAdd}
            </h1>
            <hr />
          </div>
          <div className="row py-3">
            <div className="col-md-6 col-lg-6">
              <img src="/Exams-bro.svg" className="img-fluid" />
            </div>
            <div className="col pb-5">
              <form>
                <>
                  <div className="row mb-3 row-cols-1 row-cols-md-2 row-cols-sm-1">
                    <div className="mb-3 col">
                      <label className="form-label">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter student name"
                      />
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Second name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter student name"
                      />
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Father name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter student name"
                      />
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Mother name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter mother name"
                      />
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Mobile number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="enter mobile number"
                      />
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Alternative number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="enter alternative number"
                      />
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Age</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Choose date of birth"
                      />
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Gender</label>
                      <select className="form-control">
                        <option>..</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">DOB</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Choose date of birth"
                      />
                    </div>
                    <div className="mb-3 col">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter address"
                      />
                    </div>
                  </div>
                </>
                <div className="d-grid">
                  <button type="submit" className="btn  btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center">
            <q className="lead text-success">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              quas saepe. Nobis consequatur, voluptas quasi, impedit tempora
              minima animi et voluptates eligendi nulla quaerat ipsam. Ut
              voluptatem ratione quas mollitia!
            </q>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCardsAdd;
