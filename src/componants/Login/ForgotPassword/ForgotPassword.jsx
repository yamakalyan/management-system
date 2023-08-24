import React from "react";
import { useParams } from "react-router-dom";

const ForgotPassword = () => {
  const params = useParams();
  return (
    <div>
      <div
        className=""
        style={{ height: "100vh", display: "grid", placeItems: "center" }}
      >
        <div className="container ">
          <div className="row ">
            <div className="col-lg-4 col-md mx-auto">
              <form>
                <div className="mb-3">
                  <h1 class="h3 fw-normal text-uppercase">
                    {params.name} enter your{" "}
                    <code className="text-lowercase">.@email.com</code>
                  </h1>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">
                  Sent Link
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
