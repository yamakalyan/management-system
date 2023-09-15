import "./Events.css";
export const Events = () => {
  return (
    <div>
      <div className="container py-4">
        <div className="mb-3 py-2">
          <h2 className="text-secondary display-5 ">Explore Events</h2>
          <hr style={{ width: "50%", borderTop: "4px solid green" }} />
        </div>
        <div>
          <div className="event-1 rounded-3" data-aos="fade-right">
            <div className="event-1-bg p-5 mb-4 rounded-3 shadow-sm">
              <div className="container-fluid py-5 text-para">
                <h1 className="display-5 fw-bold ">Custom jumbotron</h1>
                <p className="col-md-8 fs-4">
                  Using a series of utilities, you can create this jumbotron,
                  just like the one in previous versions of Bootstrap. Check out
                  the examples below for how you can remix and restyle it to
                  your liking.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-md-stretch">
            <div className="col-md-6 mb-3" data-aos="fade-up">
              <div className="event-2 rounded-3">
                <div className="event-1-bg py-4  rounded-3 ">
                  <div className="h-100 p-5 rounded-3 text-para">
                    <h2>Change the background</h2>
                    <p>
                      Swap the background-color utility and add a `.text-*`
                      color utility to mix up the jumbotron look. Then, mix and
                      match with additional component themes and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3" data-aos="fade-up">
              <div className="event-3 rounded-3">
                <div className="event-1-bg py-4  rounded-3 ">
                  <div className="h-100 p-5 rounded-3 text-para">
                    <h2>Change the background</h2>
                    <p>
                      Swap the background-color utility and add a `.text-*`
                      color utility to mix up the jumbotron look. Then, mix and
                      match with additional component themes and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
