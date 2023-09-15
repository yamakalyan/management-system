import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="container px-4 py-5 my-3">
        <h2 className="pb-2 border-bottom">WEL COME </h2>

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-3 my-auto">
          <div
            className="col d-flex flex-column align-items-start gap-2 "
            data-aos="fade-right"
          >
            <h2 className="fw-bold text-body-emphasis">
              NISHITA COMMERCE AND SCIENCE COLLEGE
            </h2>
            <p className="text-body-secondary">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <Link to="/about" className="btn btn-primary btn-lg">
              know more..
            </Link>
          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div
                className="col d-flex flex-column gap-2"
                data-aos="fade-left"
              >
                <div>
                  <span className="h4">
                    <i className="bi bi-card-checklist"></i>
                  </span>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Certified Staff
                </h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div
                className="col d-flex flex-column gap-2"
                data-aos="fade-left"
              >
                <div>
                  <span className="h4">
                    <i className="bi bi-bar-chart"></i>
                  </span>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  High-scored Records
                </h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div
                className="col d-flex flex-column gap-2"
                data-aos="fade-left"
              >
                <div>
                  <span className="h4">
                    <i className="bi bi-bus-front"></i>
                  </span>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Vehicle Services
                </h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div
                className="col d-flex flex-column gap-2"
                data-aos="fade-left"
              >
                <div>
                  <span className="h4">
                    <i className="bi bi-buildings"></i>
                  </span>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Beautiful Buildings
                </h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
