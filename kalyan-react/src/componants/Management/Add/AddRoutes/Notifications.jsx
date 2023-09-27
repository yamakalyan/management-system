import { useLocation } from "react-router-dom";

const Notifications = () => {
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
                    <label className="form-label">
                      Enter Title of the Notification
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex : 13/08/2023 Holiday, Alerts etc.."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Enter Notification Description
                    </label>
                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="write few words related to notification.."
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

export default Notifications;
