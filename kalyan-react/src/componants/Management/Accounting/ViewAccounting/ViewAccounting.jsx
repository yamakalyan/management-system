import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewAccounting = () => {
  const params = useParams();
  const [optionValues, setOptionsValues] = useState([]);

  const optionsFee = [
    "..",
    "Nursery",
    "UKG",
    "LKG",
    "1st class",
    "2nd class",
    "3rd class",
    "4th class",
    "5th class",
    "6th class",
    "7th class",
    "8th class",
    "9th class",
    "10th class",
  ];
  const optionsSalaries = [
    "..",
    "Telugu",
    "English",
    "Maths",
    "Science",
    "chemistry",
    "Social",
  ];

  const ifvalue =
    params.group === "fees"
      ? optionsFee
      : params.group === "salaries"
      ? optionsSalaries
      : [];

  useEffect(() => {
    setOptionsValues(ifvalue);
  }, []);

  const mappingOptions = optionValues?.map((option, id) => {
    return (
      <>
        <option value={option.toLowerCase()} key={id}>
          {option}
        </option>
      </>
    );
  });

  return (
    <div>
      <div className="container py-5 " data-aos="zoom-in">
        <div className="mb-4 text-center">
          <h2 className="text-capitalize fw-bold text-primary font-monospace">
            {params.group} {params.name}
          </h2>
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
              <label>{params.group === "fees" ? "Admission No. or Username" : "Mobile number or Username"}</label>
            </div>
          </div>
          {mappingOptions.length !== 0 && (
            <>
              <div className="col">
                <div className="form-floating mb-3">
                  <select className="form-select">{mappingOptions}</select>
                  <label>Choose </label>
                </div>
              </div>
            </>
          )}
          {params.group === "expanses" && (
            <>
              <div className="col">
                <div className="form-floating mb-3">
                 <input type="date"  className="form-control"/>
                  <label>Choose date</label>
                </div>
              </div>
            </>
          )}

          {params.group === "fees" && (
            <>
              <div className="col">
                <div className="form-floating mb-3">
                  <select className="form-select">
                    <option selected>..</option>
                    <option value="1">A</option>
                    <option value="1">B</option>
                    <option value="1">C</option>
                    <option value="1">D</option>
                  </select>
                  <label>Choose </label>
                </div>
              </div>
            </>
          )}
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
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
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
  );
};

export default ViewAccounting;
