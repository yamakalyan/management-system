import { Link, useLocation } from "react-router-dom";

export const Expanses = () => {
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
            <img src="/Money stress-bro.svg" className="img-fluid" />
          </div>
          <div className="col pb-5">
            <form>
              <div className="row mb-3 py-4">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Expanse Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="expanse by ?"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Expanse By Who ?</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="expanse by ?"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Expanse Reason</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Expanse reason"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Enter Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Expanse amount"
                    />
                  </div>
                  <div className=" mb-3">
                    <label className="form-label">Choose payment type</label>
                    <select className="form-select" id="inputGroupSelect01">
                      <option selected>..</option>
                      <option value="notpaid">Not Paid</option>
                      <option value="upi">UPI</option>
                      <option value="cash">Cash</option>
                      <option value="rent">Rent</option>
                    </select>
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
