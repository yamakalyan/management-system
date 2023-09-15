import { useState } from "react";
import { Loader1 } from "../Loaders/Loader1";
import {
  BarGraph,
  PolarAreaGraph,
  PieGraph,
  DonoutGraph,
} from "./Graphs/Graphs";

export const Dashboard = () => {
  const [loader, setLoader] = useState(false);

  return (
    <div>
      {loader ? (
        <Loader1 />
      ) : (
        <>
          {/* <div className="w-100 h-100 m-0 p-0">
            <div className="row border border-2">
              <div className="col-md-2 col-lg-2" data-aos="zoom-in">
                <div
                  className="bg-dark text-light "
                  style={{ height: "100vh" }}
                >
                  <div className="ms-4">
                    <h4 className="py-3">Dashboard</h4>
                  </div>
                  <ul class="navbar-nav ms-4">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" aria-disabled="true">
                        Disabled
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" aria-disabled="true">
                        Disabled
                      </a>
                    </li>
                  </ul>
                  <div className="ms-4">
                    <h5 className="py-3">More tools</h5>
                  </div>
                  <ul class="navbar-nav ms-4">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md col-lg" data-aos="zoom-in">
                <div
                  className="w-100 px-4"
                  style={{ height: "100%", width: "100%" }}
                >
                  <BarGraph />
                </div>
              </div>
            </div>
          </div> */}
          <div class="container-fluid">
            <div class="row"  data-aos="zoom-in">
              <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div
                  class="offcanvas-md offcanvas-end bg-body-tertiary"
                  tabindex="-1"
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="sidebarMenuLabel">
                      Company name
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#sidebarMenu"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2 active"
                          aria-current="page"
                          href="#"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Orders
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Products
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Customers
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Reports
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Integrations
                        </a>
                      </li>
                    </ul>

                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                      <span>Saved reports</span>
                      <a
                        class="link-secondary"
                        href="#"
                        aria-label="Add a new report"
                      ></a>
                    </h6>
                    <ul class="nav flex-column mb-auto">
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Current month
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Last quarter
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Social engagement
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Year-end sale
                        </a>
                      </li>
                    </ul>

                    <hr class="my-3" />

                    <ul class="nav flex-column mb-auto">
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Settings
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-flex align-items-center gap-2"
                          href="#"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 class="h2">Dashboard</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Share
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Export
                      </button>
                    </div>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
                    >
                      This week
                    </button>
                  </div>
                </div>
                <div className="p-4 m-0" >
                  <BarGraph />
                </div>
                <h2>Section title</h2>
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
              </main>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
