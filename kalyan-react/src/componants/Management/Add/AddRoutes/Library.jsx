import { useLocation } from "react-router-dom";

const Library = () => {
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
                    <label className="form-label">Book title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter book title"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Book count</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="enter book count"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Book Description { "(optional)"}</label>
                    <textarea
                      type="text"
                      rows="5"
                      className="form-control"
                      placeholder="write few words related to book.."
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

export default Library;
