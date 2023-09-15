import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Attendance = () => {
  const params = useParams();
  const [attendance, setAttendance] = useState(false);
  const [attendance2, setAttendance2] = useState(false);
  const [attendanceValue, setAttedanceValue] = useState([]);


  useEffect(() => {
    const fetchingData = async () => {
      await fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data =>setAttedanceValue(data.products))
    }
    fetchingData()
  }, [])
  console.log(attendanceValue)

  const mapping = attendanceValue.map((product, id) => {
    return (
      <>
        
      </>
    )
  })

  return (
    <div className="attendance">
      <div className="container py-5">
        <div>
          <h1 className="text-success font-monospace">{(params.name).toLocaleUpperCase()}</h1>
          <p className="font-monospace">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ea
            repudiandae molestiae architecto.
          </p>
        </div>

        <div className="row py-5 ">
          <div className="col table-responsive small">
            <table className="table table-sm table-hover table-striped">
              <thead>
                <tr className="table-primary"> 
                  <th scope="col">#Id</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Attendance</th>
                  <th scope="col">
                    <div className="mx-3">
                      <label className="list-group-item">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                        />
                        <small>Select all</small>
                      </label>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#2142151</th>
                  <td>Mark</td>
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
                  <td>Mark</td>
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
                    <label className="list-group-item">
                      <input
                        className="form-check-input mx-3"
                        type="checkbox"
                        checked={attendance2}
                        onClick={() => setAttendance2(!attendance2)}
                      />
                    </label>
                  </td>
                </tr>
                <tr className="">
                  <th scope="row">#2142151</th>
                  <td>Mark</td>
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
                    <label className="list-group-item">
                      <input
                        className="form-check-input mx-3"
                        type="checkbox"
                        checked={attendance2}
                        onClick={() => setAttendance2(!attendance2)}
                      />
                    </label>
                  </td>
                </tr>
                <tr className="">
                  <th scope="row">#2142151</th>
                  <td>Mark</td>
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
                    <label className="list-group-item">
                      <input
                        className="form-check-input mx-3"
                        type="checkbox"
                        checked={attendance2}
                        onClick={() => setAttendance2(!attendance2)}
                      />
                    </label>
                  </td>
                </tr>
                <tr className="">
                  <th scope="row">#2142151</th>
                  <td>Mark</td>
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
                    <label className="list-group-item">
                      <input
                        className="form-check-input mx-3"
                        type="checkbox"
                        checked={attendance2}
                        onClick={() => setAttendance2(!attendance2)}
                      />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
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
        </div>
      </div>
    </div>
  );
};
