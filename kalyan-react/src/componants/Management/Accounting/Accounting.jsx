import { useState } from "react";
import { Loader1 } from "../../Loaders/Loader1";
import { BarGraph } from "../../Dashboard/Graphs/Graphs";
import { useParams } from "react-router-dom";

export const Accounting = () => {
  const [loader, setLoader] = useState(false);
  const params = useParams();

  return (
    <div>
      {loader ? (
        <Loader1 />
      ) : (
        <>
          <div className="">
            <div className="container py-5 ">
              <div className="mb-4 text-center">
                <h1 className="text-capitalize display-6 text-primary font-monospace">Accounting Information.</h1>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 my-5">
                <div className="col my-2" data-aos="zoom-in">
                  <div className="card shadow">
                    <div className="card-body p-4">
                      <h5 className="card-title">{params.name}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="card-link">
                        Card link
                      </a>
                      <a href="#" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col my-2" data-aos="zoom-in">
                  <div className="card shadow">
                    <div className="card-body p-4">
                      <h5 className="card-title">{params.name}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="card-link">
                        Card link
                      </a>
                      <a href="#" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col my-2" data-aos="zoom-in">
                  <div className="card shadow">
                    <div className="card-body p-4">
                      <h5 className="card-title">{params.name}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="card-link">
                        Card link
                      </a>
                      <a href="#" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col my-2" data-aos="zoom-in">
                  <div className="card shadow">
                    <div className="card-body p-4">
                      <h5 className="card-title">{params.name}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="card-link">
                        Card link
                      </a>
                      <a href="#" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-monospace">showing information about</p>
                <h1 className="text-capitalize display-6 text-primary font-monospace">
                  {params.name}
                </h1>
                <p className="font-monospace lead">
                  Search any user to find information, enter user name or
                  mobile.
                </p>
              </div>

              <div className="row">
                <div className="col-md-8 col-lg-8 mx-auto" data-aos="zoom-in">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username, mobile number."
                    />
                  </div>
                </div>
                <div className="col-md col-lg mx-auto" data-aos="zoom-in">
                  {/* <div className="input-group mb-3">
                    <input
                      type="button"
                      className="form-control btn btn-primary"
                      placeholder="Username"
                      value="Search"
                    />
                  </div> */}
                </div>
              </div>

              <div className="row py-5 ">
                <div className="col">
                <div class="table-responsive small">
                  <table class="table table-striped table-sm">
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
  );
};
