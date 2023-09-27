import { useLocation } from "react-router-dom";

const FeemanagementAdd = () => {
  const location = useLocation();
  const trimAdd = location.pathname.replace("/add/", "");
  return (
    <div>
      <div className="container py-3" data-aos="zoom-in">
        <div>
          <h1 className="text-success font-monospace h2">Create {trimAdd}</h1>
          <hr />
        </div>
        <div className="row py-3">
          <form>
            <div className="col pb-5">
              <div className="row mb-3">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Student name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex : kalyan yama, madhu .."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Student admission number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex : Ad132412, 1411424.."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Student class</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex : Ad132412, 1411424.."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Student class</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex : Ad132412, 1411424.."
                    />
                  </div>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn  btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeemanagementAdd;
