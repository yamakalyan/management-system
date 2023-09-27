import { useLocation } from "react-router-dom";

export const Other = () => {
  const location = useLocation();
  const trimAdd = location.pathname.replace("/add/", "").toLocaleUpperCase();
  return (
    <div>
      <div className="container py-5" data-aos="zoom-in">
        <div>
          <h1 className="text-success font-monospace h2">
            Enter Details to Create {trimAdd}
          </h1>
          <hr/>
        </div>
        <div className="row py-3">
            <form>
          <div className="col">
              <div className="row mb-3">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">
                      Expanse Description
                    </label>
                    <input type="text" className="form-control" placeholder="Expanse description" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Enter Amount
                    </label>
                    <input type="text" className="form-control" placeholder="Expanse amount" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Expanse By Who ?
                    </label>
                    <input type="text" className="form-control" placeholder="expanse by ?" />
                  </div>
                  <div className="row">
                    <div className="col">
                    <div className="mb-3">
                    <label className="form-label">
                      Expanse By Who ?
                    </label>
                    <input type="text" className="form-control" placeholder="expanse by ?" />
                  </div>
                    </div>
                    <div className="col">
                    <div className="mb-3">
                    <label className="form-label">
                      Expanse By Who ?
                    </label>
                    <input type="text" className="form-control" placeholder="expanse by ?" />
                  </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                    <div className="mb-3">
                    <label className="form-label">
                      Expanse By Who ?
                    </label>
                    <input type="text" className="form-control" placeholder="expanse by ?" />
                  </div>
                    </div>
                    <div className="col">
                    <div className="mb-3">
                    <label className="form-label">
                      Expanse By Who ?
                    </label>
                    <input type="text" className="form-control" placeholder="expanse by ?" />
                  </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">
                      Expanse Description
                    </label>
                    <input type="text" className="form-control" placeholder="Expanse description" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Enter Amount
                    </label>
                    <input type="text" className="form-control" placeholder="Expanse amount" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Expanse By Who ?
                    </label>
                    <input type="text" className="form-control" placeholder="expanse by ?" />
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
