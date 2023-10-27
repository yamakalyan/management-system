import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SalariesAdd = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUsernameId] = useState("");
  const [userMobile, setUsermobile] = useState("");

  useEffect(() => {
    const fetchingUsers = async () => {
      await fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((json) => setUsers(json.users));
    };
    fetchingUsers();
  }, []);

  const handleOnChange = (e) => {
    const findname = users.find((userId) => userId.id == e.target.value);
    setUsername(findname?.firstName);
    setUsernameId(e.target.value);
    setUsermobile(findname?.phone);
  };

  const trimAdd = location.pathname.replace("/add/", "");
  return (
    <div>
      <div className="container py-3" data-aos="zoom-in">
        <div>
          <h1 className="text-success font-monospace text-center h2">
            Create {trimAdd}
          </h1>
          <hr />
        </div>
        <div className="row py-3">
          <div className="col-md-6 col-lg-6">
            <img src="/Payment Information-bro.svg" className="img-fluid" />
          </div>
          <div className="col pb-5">
            <form>
              <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Teacher name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter name"
                      list="optionsList"
                      onChange={handleOnChange}
                      value={username}
                      required
                    />
                    <datalist id="optionsList">
                      {users.map((user, id) => {
                        return (
                          <>
                            <option value={user.id} key={id}>
                              {user.firstName}
                            </option>
                          </>
                        );
                      })}
                    </datalist>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Mobile number</label>
                    <input
                      type="text"
                      value={userMobile}
                      className="form-control"
                      placeholder="enter mobile number"
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Salary amount</label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      defaultValue="0"
                      placeholder="enter total amount"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Paid amount</label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      defaultValue="0"
                      placeholder="enter paid amount"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Due amount</label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      defaultValue="0"
                      placeholder="enter due amount"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Paid type</label>
                    <select className="form-control">
                      <option>Cash</option>
                      <option>UPI</option>
                      <option>Online</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Remarks (optional)</label>
                      <textarea
                        className="form-control"
                        placeholder="write remarks if any ?"
                        rows="4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn  btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center">
          <q className="lead text-success">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            quas saepe. Nobis consequatur, voluptas quasi, impedit tempora
            minima animi et voluptates eligendi nulla quaerat ipsam. Ut
            voluptatem ratione quas mollitia!
          </q>
        </div>
      </div>
    </div>
  );
};

export default SalariesAdd;
