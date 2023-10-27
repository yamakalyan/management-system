import { useState } from "react";
import SearchInputs from "../../../SearchInputs/SearchInputs";
import { useParams } from "react-router-dom";

const ShowAttendance = () => {
  const params = useParams();
  const [valueOne, setValueOne] = useState("");
  const [valuetwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");
  const role = localStorage.getItem("role");

  const handleChange = (firstValue, secondValue, thirdValue) => {
    setValueOne(firstValue);
    setValueTwo(secondValue);
    setValueThree(thirdValue);
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row mb-3 ">
          <h2 className="text-primary fw-light text-center">
            Showing Attendace results for {params.name}
          </h2>
        </div>
        <hr />
        <div className="row">
          {role !== "student" && (
            <SearchInputs
              assignValues={handleChange}
              paramsGroup={params.name}
            />
          )}
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3 z-0">
              <select className="form-select">
                <option>...</option>
                <option>Jan</option>
                <option>Jan</option>
                <option>Jan</option>
              </select>
              <label>Select month</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-3 z-0">
              <input type="date" className="form-control" />
              <label>Select Date</label>
            </div>
          </div>
        </div>
        <div className="row py-5 ">
          <div className="col">
            <div className="table-responsive small">
              <table className="table table-striped table-sm">
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
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAttendance;
