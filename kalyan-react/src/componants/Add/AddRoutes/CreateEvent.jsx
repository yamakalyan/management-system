import React from "react";
import { useLocation } from "react-router-dom";

export const CreateEvent = () => {
  const location = useLocation()
  const trimAdd = (location.pathname).replace("/add/", "").toLocaleUpperCase()

  return (
    <div>
      <div className="container py-5">
        <div>
          <h1 className="text-center text-primary font-monospace">Enter Details to Create {trimAdd}</h1>
        </div>
        <div className="row py-5 my-5">
          <div className="col">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEnter data"
                      placeholder="Enter data"
                    />
                    <label for="floatingEnter data">Enter data</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEnter data"
                      placeholder="Enter data"
                    />
                    <label for="floatingEnter data">Enter data</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEnter data"
                      placeholder="Enter data"
                    />
                    <label for="floatingEnter data">Enter data</label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEnter data"
                      placeholder="Enter data"
                    />
                    <label for="floatingEnter data">Enter data</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEnter data"
                      placeholder="Enter data"
                    />
                    <label for="floatingEnter data">Enter data</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEnter data"
                      placeholder="Enter data"
                    />
                    <label for="floatingEnter data">Enter data</label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEnter data"
                      placeholder="Enter data"
                    />
                    <label for="floatingEnter data">Enter data</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEnter data"
                      placeholder="Enter data"
                    />
                    <label for="floatingEnter data">Enter data</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEnter data"
                      placeholder="Enter data"
                    />
                    <label for="floatingEnter data">Enter data</label>
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
      </div>
    </div>
  );
};
