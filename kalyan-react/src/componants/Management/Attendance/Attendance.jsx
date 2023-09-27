import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Attendance = () => {
  const params = useParams();
  const [optionValue, setOptionValue] = useState("");
  const [attendance, setAttendance] = useState(false);
  const [attendance2, setAttendance2] = useState(false);
  const [attendanceValue, setAttedanceValue] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setAttedanceValue(data.products));
    };
    fetchingData();
  }, []);

  const mapping = attendanceValue.map((product, id) => {
    return (
      <>
        <tr key={id}>
          <th scope="row">#2142151</th>
          <td>{product.title}</td>
          <td>{product.brand}</td>
          <td
            className={
              attendance ? "text-success fw-bold" : "text-danger fw-bold"
            }
          >
            {" "}
            {attendance ? "Present" : "Absent"}
          </td>
          <td>
            <input
              type="text"
              placeholder={attendance ? "Present" : "Write reason"}
              disabled={attendance ? true : false}
              className={
                attendance
                  ? "border-success border "
                  : "border-danger border-2 "
              }
            />
          </td>
          <td>
            <label className="list-group-item">
              <input
                className="form-check-input mx-3"
                type="checkbox"
                checked={attendance}
                onClick={() => setAttendance(!attendance)}
              />
            </label>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className="attendance">
      <div className="container py-5" data-aos="zoom-in">
        <div>
          <h1 className="text-success font-monospace">
            {params.name.toLocaleUpperCase()}
          </h1>
          <p className="font-monospace">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ea
            repudiandae molestiae architecto.
          </p>
        </div>
        {params.name === "students" && (
          <>
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
                  <label htmlFor="floatingInput">Admission No. or Username</label>
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
                  <label htmlFor="floatingInput" className="z-0">Choose class</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <select className="form-select" id="select">
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
          </>
        )}

        <div className="row py-5 ">
          <div className="col table-responsive small">
            <table className="table table-hover table-striped">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Roll no.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Class</th>
                  <th scope="col">Attendance</th>
                  <th scope="col">Reason</th>
                  <th scope="col">
                    <label className="list-group-item d-flex gap-2">
                      <span>Select all</span>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </label>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <th scope="row">#2142151</th>
                  <td>Otto</td>
                  <td>English</td>

                  <td
                    className={
                      attendance
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    {" "}
                    {attendance ? "Present" : "Absent"}
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder={attendance ? "Present" : "Write reason"}
                      disabled={attendance ? true : false}
                      className={
                        attendance
                          ? "border-success border "
                          : "border-danger border-2 "
                      }
                    />
                  </td>
                  <td>
                    <label className="list-group-item">
                      <input
                        className="form-check-input mx-3"
                        type="checkbox"
                        checked={attendance}
                        onClick={() => setAttendance(!attendance)}
                      />
                    </label>
                  </td>
                </tr>
                <tr className="">
                  <th scope="row">#2142151</th>
                  <td>Otto</td>
                  <td>English</td>
                  <td
                    className={
                      attendance2
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    {" "}
                    {attendance2 ? "Present" : "Absent"}
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder={attendance2 ? "Present" : "Write reason"}
                      disabled={attendance2 ? true : false}
                      className={
                        attendance2
                          ? "border-success border "
                          : "border-danger border-2 "
                      }
                    />
                  </td>
                  <td>
                    <label className="list-group-item">
                      <input
                        className="form-check-input mx-3"
                        type="checkbox"
                        checked={attendance2}
                        onClick={() => setAttendance2(!attendance2)}
                      />
                    </label>
                  </td>
                </tr> */}
                {mapping}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
              <div className="list-group">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0"
                    type="checkbox"
                    value=""
                    checked
                  />
                  <span>
                    First checkbox
                    <small className="d-block text-body-secondary">
                      With support text underneath to add more detail
                    </small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0"
                    type="checkbox"
                    value=""
                  />
                  <span>
                    Second checkbox
                    <small className="d-block text-body-secondary">
                      Some other text goes here
                    </small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0"
                    type="checkbox"
                    value=""
                  />
                  <span>
                    Third checkbox
                    <small className="d-block text-body-secondary">
                      And we end with another snippet of text
                    </small>
                  </span>
                </label>
              </div>

              <div className="list-group">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0"
                    type="radio"
                    name="listGroupRadios"
                    id="listGroupRadios1"
                    value=""
                    checked
                  />
                  <span>
                    First radio
                    <small className="d-block text-body-secondary">
                      With support text underneath to add more detail
                    </small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0"
                    type="radio"
                    name="listGroupRadios"
                    id="listGroupRadios2"
                    value=""
                  />
                  <span>
                    Second radio
                    <small className="d-block text-body-secondary">
                      Some other text goes here
                    </small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0"
                    type="radio"
                    name="listGroupRadios"
                    id="listGroupRadios3"
                    value=""
                  />
                  <span>
                    Third radio
                    <small className="d-block text-body-secondary">
                      And we end with another snippet of text
                    </small>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
