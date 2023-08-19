
const Footer = () => {
  return (
    <div className="text-light bg-dark">
      {/* style={{ background: "#195840" }} */}
      <div className="container ">
        <section className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer
