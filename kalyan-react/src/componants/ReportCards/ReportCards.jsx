import React from "react";
import { useParams } from "react-router-dom";

export const ReportCards = () => {
  const params = useParams()
  const paramsName = params.name === "halltickets" ? "Hall Tickets" : params.name === "reportcards" ? "Report Cards" : params.name
  return (
    <div>
      <div className="container" data-aos="zoom-in">
        <div className="py-5">
          <div className="mb-3">
            <h1 className="text-success font-monospace">{paramsName} </h1>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-4">
                  <div className="col" >
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="username"
                        required
                      />
                      <label className="z-0">Admission No. or Username</label>
                    </div>
                  </div>
                  <div className="col" >
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
                      <label className="z-0">Choose class</label>
                    </div>
                  </div>
                  <div className="col" >
                    <div className="form-floating mb-3">
                      <select className="form-select">
                        <option selected>..</option>
                        <option value="1">A</option>
                        <option value="1">B</option>
                        <option value="1">C</option>
                        <option value="1">D</option>
                      </select>
                      <label className="z-0">Choose section</label>
                    </div>
                  </div>
                </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">10th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                {/* <iframe src="https://digitalindiaportal.co.in/users/pancard/Form49A.pdf" className="img-fluid"></iframe> */}

                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">9th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">8th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">7th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">6th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">5th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">4th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">3rd Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">2nd Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">1st Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">UKG</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">LKG</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">Nursery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
