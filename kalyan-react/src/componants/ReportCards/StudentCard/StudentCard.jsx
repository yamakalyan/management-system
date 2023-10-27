import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentCard = () => {
  const params = useParams();
  const [imgName, setImgName] = useState("");
  useEffect(() => {
    params.name === "halltickets"
      ? setImgName("/White minimalist music festival ticket.png")
      : setImgName("/report-card-3.svg");
    console.log(params.name);
  }, [params.name]);
  return (
    <div>
      <div className="row">
        <div className="col" data-aos="zoom-in">
          <div className="card shadow-sm ">
            <img src={imgName} className="img-fluid py-3 px-4" />
            <div className="card-body">
              <p className="card-text">10th Class</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
