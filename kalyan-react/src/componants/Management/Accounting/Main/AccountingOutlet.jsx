import { useState } from "react";
import { Loader1 } from "../../../Loaders/Loader1";
import { Link, useParams } from "react-router-dom";
import SearchInputs from "../../../SearchInputs/SearchInputs";

const AccountingOutlet = () => {
  const [loader, setLoader] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  const [valueOne, setValueOne] = useState("");
  const [valuetwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");
  
  const handleChange = (firstValue, secondValue, thirdValue) => {
    setValueOne(firstValue);
    setValueTwo(secondValue);
    setValueThree(thirdValue);
  };

  const params = useParams();
  const ifFee = params.name == "feemanagement" ? "fees" : params.name

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
                      showing information about {ifFee}
                    </p>
                  </div>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col">
                      <div
                        className={`card mb-3 text-bg-success border-3 border-success ${
                          hover1 ? " shadow" : ""
                        }`}
                        onMouseEnter={() => setHover1(true)}
                        onMouseLeave={() => setHover1(false)}
                      >
                        <Link to={`/accounting/${ifFee}/paid`} className="text-light">
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
                      <div
                        className={`card mb-3 text-bg-danger border-3 border-danger ${
                          hover2 ? " shadow" : ""
                        }`}
                        onMouseEnter={() => setHover2(true)}
                        onMouseLeave={() => setHover2(false)}
                      >
                        <Link to={`/accounting/${ifFee}/due`} className="text-light">
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
                      <div
                        className={`card mb-3 text-bg-primary border-3 border-primary ${
                          hover3 ? " shadow" : ""
                        }`}
                        onMouseEnter={() => setHover3(true)}
                        onMouseLeave={() => setHover3(false)}
                      >
                        <Link
                          to={`/accounting/${ifFee}/totalpaid`}
                          className="text-light"
                        >
                          <div className="card-body py-4">
                            <h5 className="card-title">3120</h5>
                            <h6 className="card-subtitle mb-2">Total Paid</h6>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className={`card mb-3 text-bg-light border-3 border-dark ${
                          hover4 ? " shadow" : ""
                        }`}
                        onMouseEnter={() => setHover4(true)}
                        onMouseLeave={() => setHover4(false)}
                      >
                        <Link
                          to={`/accounting/${ifFee}/totaldue`}
                          className="text-dark"
                        >
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
                <SearchInputs
                  assignValues={handleChange}
                  paramsGroup={ifFee}
                />
                <p>{valueOne}</p>
                <p>{valuetwo}</p>
                <p>{valueThree}</p>

                <div className="my-4  text-center">
                  <h3 className="text-capitalize text-primary">
                    showing results for Fee's
                  </h3>
                  <hr />
                </div>

                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 py-3">
                  <div className="col mb-4">
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <Link className="btn btn-primary" to="/add/fee">
                          <span className="bi bi-plus-circle me-2"></span>
                          Create
                        </Link>
                      </div>
                      <div className="">
                        <div className="btn-toolbar mb-2 mb-md-0">
                          <div className="btn-group me-2">
                            <button type="button" className="btn btn-primary">
                              Share
                            </button>
                            <button type="button" className="btn btn-primary">
                              Import
                            </button>
                            <button type="button" className="btn btn-primary">
                              Export
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="table-responsive shadow small">
                      <table className="table  table-striped ">
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

export default AccountingOutlet;
