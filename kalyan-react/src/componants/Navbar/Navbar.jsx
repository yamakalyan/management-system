import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="sticky-top">
        <nav
          className="navbar navbar-expand-md bg-dark border-bottom "
          data-bs-theme="dark"
        >
          <div className="container">
            <Link className="navbar-brand me-4" to="/">
              KALYAN KN
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
                  <li className="nav-item">
                    <a className="nav-link" href="/#about">
                      <i className="bi bi-person-bounding-box me-2"></i>
                      <span>About</span>
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      Help
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="/#products">
                      <i className="bi bi-box me-2"></i>
                      <span>Products</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      <i className="bi bi-sliders me-2"></i>
                      <span> Features</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bi bi-people-fill me-2"></i>
                      <span> Staff</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/login/management">
                          Management
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/login/teacher">
                          Teacher
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/login/student">
                          Student
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      <i className="bi bi-wrench-adjustable-circle me-2"></i>
                      <span>Support</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      <i className="bi bi-tag-fill me-2"></i>
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#contact">
                      <i className="bi bi-person-lines-fill me-2"></i>
                      <span> Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
