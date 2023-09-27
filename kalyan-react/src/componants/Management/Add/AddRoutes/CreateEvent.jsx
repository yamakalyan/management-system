import { useLocation } from "react-router-dom";

export const CreateEvent = () => {
  const location = useLocation();
  const trimAdd = location.pathname.replace("/add/", "")

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
                    <label className="form-label">Event title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter event title"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Select date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="enter event title"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Event Description</label>
                    <textarea
                      type="text"
                      rows='5'
                      className="form-control"
                      placeholder="write few words related to event.."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Event image</label>
                    <input
                      type="file"
                      className="form-control"
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
