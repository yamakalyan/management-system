export default function Navbar() {
  return (
    <div>
      <div className="sticky-top">
        <nav
          className="navbar navbar-expand-md bg-dark border-bottom"
          data-bs-theme="dark"
        >
          <div className="container">
            <a className="navbar-brand d-md-none" href="#">
              KALYAN KN
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
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
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="offcanvas-body">
                <ul className="navbar-nav flex-grow-1 justify-content-between">
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      <i class="bi bi-person-bounding-box me-2"></i>
                      <span>About</span>
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      Help
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#products">
                      <i class="bi bi-box me-2"></i>
                      <span>Products</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="bi bi-sliders me-2"></i>
                      <span> Features</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="bi bi-people-fill me-2"></i>
                      <span> Staff</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="bi bi-wrench-adjustable-circle me-2"></i>
                      <span>Support</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="bi bi-tag-fill me-2"></i>
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      <i class="bi bi-person-lines-fill me-2"></i>
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
