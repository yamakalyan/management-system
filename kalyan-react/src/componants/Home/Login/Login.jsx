import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BaseURL } from "../../Helpers/Helpers";

const Login = () => {
  const params = useParams();
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const options = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: params.name,
        username: username,
        password: password,
      }),
    };
    await fetch(BaseURL + "auth/login", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("authToken", data.token);
          localStorage.setItem("role", params.name);
          navigator(`/profile/${params.name}`);
          window.location.reload(false);
        } else {
          setLoginMsg(data.message);
          localStorage.removeItem("authToken");
          // navigator();
        }
      });
  };

  return (
    <div
      className=""
      style={{ height: "100vh", display: "grid", placeItems: "center" }}
    >
      <div className="container ">
        <div className="row ">
          <div className="col-lg-4 col-md mx-auto">
            <form onSubmit={handleLogin}>
              <h2 className=" mb-3 fw-normal text-center">
                Please sign in{" "}
                <code className="text-capitalize">.{params.name}</code>
              </h2>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label>Username</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
              </div>

              <div className="my-3">
                <p className="text-danger text-center">{loginMsg}</p>
              </div>
              <div className="my-3">
                Did you{" "}
                <Link to={`/forgotpassword/${params.name}`}>
                  forgot password ?
                </Link>
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
