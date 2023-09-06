import React from "react";
import { Link, useParams } from "react-router-dom";

const Login = () => {
  const params = useParams();

  return (
    <div
      className=""
      style={{ height: "100vh", display: "grid", placeItems: "center" }}
    >
      <div className="container ">
        <div className="row ">
          <div className="col-lg-4 col-md mx-auto">
            <form>
              <h2 class=" mb-3 fw-normal text-center">
                Please sign in <code className="text-capitalize">.{params.name}</code>
              </h2>

              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="username"
                />
                <label for="floatingInput">Username</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="my-3">
                Did you <Link to={`/forgotpassword/${params.name}`} >forgot password ?</Link>
              </div>
              <button class="btn btn-primary w-100 py-2" type="submit">
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
