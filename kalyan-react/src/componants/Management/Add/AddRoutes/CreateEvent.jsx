import { useLocation } from "react-router-dom";

export const CreateEvent = () => {
  const location = useLocation();
  const trimAdd = location.pathname.replace("/add/", "");

  return (
    <div>
      <div className="container py-3" data-aos="zoom-in">
        <div>
          <h2 className="text-success text-center font-monospace">
            Create {trimAdd}
          </h2>
          <hr />
        </div>
        <div className="row py-3">
          <div className="col-md-6 col-lg-6">
            <img src="/Online calendar-cuate.svg" className="img-fluid" />
          </div>
          <div className="col-md-6 col-lg-6 pb-5">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Event title</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter event title"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Select date</label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="enter event title"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Event Description</label>
                    <textarea
                      type="text"
                      rows="5"
                      className="form-control"
                      placeholder="write few words related to event.."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Event image</label>
                    <input type="file" className="form-control" />
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
