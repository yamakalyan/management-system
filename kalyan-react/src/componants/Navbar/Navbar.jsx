import { Link } from "react-router-dom";
import { Auth } from "../Authorizers/Authentication";
import {
  homeNavbarRoutes,
  staffNavbarRoutes,
  studentNavbarRoutes,
  managementNavbarRoutes,
} from "./NavRoutes/NavRoutes";

export default function Navbar() {
  const auth = Auth();
  return (
    <div id="navbar">
      <div className="sticky-top">
        <nav
          className="navbar navbar-expand-md bg-dark border-bottom "
          data-bs-theme="dark"
        >
          <div className="container-fluid mx-4">
            <Link className="navbar-brand" to="/">
              {auth.management ? "Management" : auth.staff ? "Staff" : auth.student ? "Student" : "KALYAN KN"}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              aria-controls="#offcanvas"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

            <div
              // className="offcanvas offcanvas-end"
              // tabIndex="-1"
              // id="#offcanvas"
              // aria-labelledby="#offcanvasLabel"
              className="collapse navbar-collapse ms-5"
              id="navbarSupportedContent"
            >
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav flex-grow-1 justify-content-between">
                  {auth.management
                    ? managementNavbarRoutes()
                    : auth.staff
                    ? staffNavbarRoutes()
                    : auth.student
                    ? studentNavbarRoutes()
                    : homeNavbarRoutes()}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
