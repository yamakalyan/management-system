import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader1 } from "../../../Loaders/Loader1";
import { users } from "../FakeDataUsers";
import SearchInputs from "../../../SearchInputs/SearchInputs";

const UploadAttendance = () => {
    const params = useParams();
    const [loader, setLoader] = useState(false);
    const [userData, setUsersData] = useState(users);
    const [valueOne, setValueOne] = useState("");
    const [valuetwo, setValueTwo] = useState("");
    const [valueThree, setValueThree] = useState("");
  
    const handleChange = (firstValue, secondValue, thirdValue) => {
      setValueOne(firstValue);
      setValueTwo(secondValue);
      setValueThree(thirdValue);
    };
  
    const handleInputOnChangeValue = async (id, value) => {
      const mappingAndUpdate = await userData.map((data) => {
        if (data.id === id) {
          return { ...data, attendance: value };
        }
        return data;
      });
      setUsersData(mappingAndUpdate);
    };
  
    const handleExitButton = (id) => {
      const updateToPresent = userData.map((user) => {
        if (user.id == id) {
          return { ...user, attendance: "present" };
        }
        return user;
      });
      setUsersData(updateToPresent);
    };
  
    const mapping = userData.map((product, id) => {
      return (
        <>
          <div className="col mb-2 text-light" key={id}>
            <div className="">
              <div className="list-group w-100 d-flex-justify-content-between">
                <span
                  className={`list-group-item d-flex gap-2 ${
                    product.attendance === "present"
                      ? "bg-success"
                      : product.attendance === "absent"
                      ? "bg-danger"
                      : "bg-primary"
                  } text-light`}
                >
                  <span className="w-100 text-center fw-bold">
                    {product.username}
                    <span className="d-block text-light fw-light">
                      {product.class} | {product.section}
                    </span>
                  </span>
                  <span className="w-100">
                    <div className="form-floating-sm  dropdown">
                      {product.attendance === "absent" ? (
                        <>
                          <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="enter the reason"
                                required
                              />
                            </div>
                            <div className="col my-auto">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-outline-light"
                                  >
                                    <i className="bi bi-check-lg"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-outline-light"
                                    onClick={() => handleExitButton(product.id)}
                                  >
                                    <i className="bi bi-x-lg"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <select
                            className="form-select"
                            style={{ background: "transparent" }}
                            onChange={(e) =>
                              handleInputOnChangeValue(product.id, e.target.value)
                            }
                          >
                            <option value="">...</option>
                            <option value="absent">Absent</option>
                            <option value="off-day">Off-day</option>
                            <option
                              value="present"
                              defaultValue={"present"}
                              selected
                            >
                              Present
                            </option>
                          </select>
                        </>
                      )}
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </>
      );
    });
  
    return (
      <div className="attendance">
        {loader ? (
          <Loader1 />
        ) : (
          <div className="container py-5" data-aos="zoom-in">
            <div className="">
              <h1 className="text-success font-monospace">
                {params.name.toLocaleUpperCase()} Attendance
              </h1>
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                <div className="col">
                  <p className="font-monospace">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                    ea repudiandae molestiae architecto.
                  </p>
                </div>
                <div className="col">
                  <div className="d-grid gap-2">
                    <Link className="btn btn-outline-primary" to={`/attendance/${params.name}/show`}>
                      Show {params.name} attendance list
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           <SearchInputs assignValues={handleChange} paramsGroup={params.name}/>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 py-3">
              {mapping}
            </div>
          </div>
        )}
      </div>
    );
};

export default UploadAttendance;
