import { useLocation } from "react-router-dom";

const HallticketsAdd = () => {
    const location = useLocation();
    const trimAdd = location.pathname.replace("/add/", "");
  return (
    <div>
      <div className="container py-3" data-aos="zoom-in">
        <div>
          <h1 className="text-success font-monospace h2 text-center">
            Create {trimAdd}
          </h1>
          <hr />
        </div>
        <div className="row py-3">
          <div className="col-md-6 col-lg-6 my-auto">
            <img src="/White minimalist music festival ticket.png" className="img-fluid" />
          </div>
          <div className="col pb-5">
            <form>
              <>
                <div className="row mb-3 row-cols-1 row-cols-md-2 row-cols-sm-1">
                  <div className="mb-3 col">
                    <label className="form-label">Student name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter student name"
                    />
                  </div>
                  <div className="mb-3 col">
                    <label className="form-label">Class</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="enter mobile number"
                    />
                  </div>
                  <div className="mb-3 col">
                    <label className="form-label">Start date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Choose date of birth"
                    />
                  </div>
                  <div className="mb-3 col">
                    <label className="form-label">End date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Choose date of birth"
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
  );
};

export default HallticketsAdd;
