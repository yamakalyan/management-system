import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchInputs from "../SearchInputs/SearchInputs";
import StudentCard from "./StudentCard/StudentCard";
import { Auth } from "../Authorizers/Authentication";

export const ReportCards = () => {
  const authRole = Auth()
  const params = useParams();
  const token = authRole.student
  const [imgName, setImgName] = useState("");
  const [valueOne, setValueOne] = useState("");
  const [valuetwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");
  const [loader, setLoader] = useState(false);

  const handleChange = (firstValue, secondValue, thirdValue) => {
    setValueOne(firstValue);
    setValueTwo(secondValue);
    setValueThree(thirdValue);
  };

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
            <div className="d-flex">
              <div>
                <h1 className="text-success font-monospace">{paramsName} </h1>
              </div>
            </div>
            <hr />
          </div>
          {!token ? (
            <>
              <SearchInputs assignValues={handleChange} paramsGroup={"fees"} />
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
            </>
          ) : (
            <StudentCard />
          )}
        </div>
      </div>
    </div>
  );
};
