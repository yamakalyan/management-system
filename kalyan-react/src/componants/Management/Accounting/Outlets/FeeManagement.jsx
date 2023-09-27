import { useState } from "react";
import { Loader1 } from "../../../Loaders/Loader1";
import { Link } from "react-router-dom";

const FeeManagement = () => {
  const [loader, setLoader] = useState(false);

  return (
    <div>
      <div>
        {loader ? (
          <Loader1 />
        ) : (
          <>
            <div className="">
              <div className="container py-5" data-aos="zoom-in">
                <div className="shadow p-4 rounded-2 bg-light">
                  <div className="my-2">
                    <p className="lead text-capitalize fw-bold text-primary">
                      showing information about Fee's.
                    </p>
                  </div>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col">
                      <div className="card mb-3 text-bg-success border-3 border-success">
                        <Link to="/accounting/fees/paid" className="text-light">
                          <div className="card-body py-4">
                            <h5 className="card-title">3120</h5>
                            <h6 className="card-subtitle mb-2 ">
                              This Month Paid
                            </h6>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card mb-3 text-bg-danger border-3 border-danger">
                        <Link to="/accounting/fees/due" className="text-light">
                          <div className="card-body py-4">
                            <h5 className="card-title">3120</h5>
                            <h6 className="card-subtitle mb-2">
                              This Month Due
                            </h6>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card mb-3 text-bg-primary border-3 border-primary">
                        <Link to="/accounting/fees/totalpaid" className="text-light">
                          <div className="card-body py-4">
                            <h5 className="card-title">3120</h5>
                            <h6 className="card-subtitle mb-2">Total Paid</h6>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-3 border-secondary">
                        <Link to="/accounting/fees/totaldue" className="text-dark">
                          <div className="card-body py-4">
                            <h5 className="card-title">3120</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                              Total Due
                            </h6>
                          </div>
                        </Link>
                      </div>
                    </div>
                    </div>
                    <p className=" text-primary">
                      * click on any box to view details.
                    </p>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-4">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="username"
                        required
                      />
                      <label>Admission No. or Username</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <select className="form-select">
                        <option selected>..</option>
                        <option value="1">Nursery class</option>
                        <option value="1">LKG class</option>
                        <option value="1">UKG class</option>
                        <option value="1">1st class</option>
                        <option value="1">2nd class</option>
                        <option value="1">3rd class</option>
                        <option value="1">4th class</option>
                        <option value="1">5th class</option>
                        <option value="1">6th class</option>
                        <option value="1">7th class</option>
                        <option value="1">8th class</option>
                        <option value="1">9th class</option>
                        <option value="1">10th class</option>
                      </select>
                      <label>Choose class</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <select className="form-select">
                        <option selected>..</option>
                        <option value="1">A</option>
                        <option value="1">B</option>
                        <option value="1">C</option>
                        <option value="1">D</option>
                      </select>
                      <label>Choose section</label>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <h2 className="text-capitalize text-primary">
                    showing results for Fee's
                  </h2>
                  <hr />
                </div>

                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 py-3">
                  <div className="col mb-4">
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <Link className="btn btn-sm btn-success" to="/add/fee">
                          <span className="bi bi-plus-circle me-2"></span>
                          Create new Fee
                        </Link>
                      </div>
                      <div className="">
                        <div className="btn-toolbar mb-2 mb-md-0">
                          <div className="btn-group me-2">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-success"
                            >
                              Share
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-success"
                            >
                              Import
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-success"
                            >
                              Export
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="table-responsive shadow small">
                      <table className="table  table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1,001</td>
                            <td>random</td>
                            <td>data</td>
                            <td>placeholder</td>
                            <td>text</td>
                          </tr>
                          <tr>
                            <td>1,002</td>
                            <td>placeholder</td>
                            <td>irrelevant</td>
                            <td>visual</td>
                            <td>layout</td>
                          </tr>
                          <tr>
                            <td>1,003</td>
                            <td>data</td>
                            <td>rich</td>
                            <td>dashboard</td>
                            <td>tabular</td>
                          </tr>
                          <tr>
                            <td>1,003</td>
                            <td>information</td>
                            <td>placeholder</td>
                            <td>illustrative</td>
                            <td>data</td>
                          </tr>
                          <tr>
                            <td>1,004</td>
                            <td>text</td>
                            <td>random</td>
                            <td>layout</td>
                            <td>dashboard</td>
                          </tr>
                          <tr>
                            <td>1,005</td>
                            <td>dashboard</td>
                            <td>irrelevant</td>
                            <td>text</td>
                            <td>placeholder</td>
                          </tr>
                          <tr>
                            <td>1,006</td>
                            <td>dashboard</td>
                            <td>illustrative</td>
                            <td>rich</td>
                            <td>data</td>
                          </tr>
                          <tr>
                            <td>1,007</td>
                            <td>placeholder</td>
                            <td>tabular</td>
                            <td>information</td>
                            <td>irrelevant</td>
                          </tr>
                          <tr>
                            <td>1,008</td>
                            <td>random</td>
                            <td>data</td>
                            <td>placeholder</td>
                            <td>text</td>
                          </tr>
                          <tr>
                            <td>1,009</td>
                            <td>placeholder</td>
                            <td>irrelevant</td>
                            <td>visual</td>
                            <td>layout</td>
                          </tr>
                          <tr>
                            <td>1,010</td>
                            <td>data</td>
                            <td>rich</td>
                            <td>dashboard</td>
                            <td>tabular</td>
                          </tr>
                          <tr>
                            <td>1,011</td>
                            <td>information</td>
                            <td>placeholder</td>
                            <td>illustrative</td>
                            <td>data</td>
                          </tr>
                          <tr>
                            <td>1,012</td>
                            <td>text</td>
                            <td>placeholder</td>
                            <td>layout</td>
                            <td>dashboard</td>
                          </tr>
                          <tr>
                            <td>1,013</td>
                            <td>dashboard</td>
                            <td>irrelevant</td>
                            <td>text</td>
                            <td>visual</td>
                          </tr>
                          <tr>
                            <td>1,014</td>
                            <td>dashboard</td>
                            <td>illustrative</td>
                            <td>rich</td>
                            <td>data</td>
                          </tr>
                          <tr>
                            <td>1,015</td>
                            <td>random</td>
                            <td>tabular</td>
                            <td>information</td>
                            <td>text</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeeManagement;
