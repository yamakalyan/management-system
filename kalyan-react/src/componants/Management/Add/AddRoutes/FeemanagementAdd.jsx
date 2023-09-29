import { useLocation } from "react-router-dom";

const FeemanagementAdd = () => {
  const location = useLocation();
  const trimAdd = location.pathname.replace("/add/", "");
  return (
    <div>
      <div className="container py-3" data-aos="zoom-in">
        <div>
          <h1 className="text-success font-monospace h2 text-center">Create {trimAdd}</h1>
          <hr />
        </div>
        <div className="row py-3">
          <div className="col-md-6 col-lg-6">
            <img src="/Banknote-bro.svg" className="img-fluid" />
          </div>
          <div className="col pb-5">
            <form>
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
  );
};

export default FeemanagementAdd;
