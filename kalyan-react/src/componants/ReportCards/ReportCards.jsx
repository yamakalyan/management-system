import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ReportCards = () => {
  const params = useParams();
  const [imgName, setImgName] = useState("");

  useEffect(() => {
    params.name === "halltickets"
      ? setImgName("/White minimalist music festival ticket.png")
      : setImgName("/report-card-3.svg");
    console.log(params.name);
  }, [params.name]);

  const paramsName =
    params.name === "halltickets"
      ? "Hall Tickets"
      : params.name === "reportcards"
      ? "Report Cards"
      : params.name;

  return (
    <div>
      <div className="container" data-aos="zoom-in">
        <div className="py-5">
          <div className="mb-3 text-center">
            <h1 className="text-success font-monospace">{paramsName} </h1>
            <hr />
          </div>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-4"
            data-aos="zoom-in"
          >
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
                <label className="z-0">Choose class</label>
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
                <label className="z-0">Choose section</label>
              </div>
            </div>
            <div className="col">
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
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">10th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">9th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">10th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">9th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">10th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">9th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">10th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">9th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">10th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">9th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">10th Class</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img src={imgName} className="img-fluid py-3 px-4" />
                <div className="card-body">
                  <p className="card-text">9th Class</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
