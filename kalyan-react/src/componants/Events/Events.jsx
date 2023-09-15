const Events = () => {
  return (
    <div>
      {/* <div className="container py-4">
        <div className="mb-3 text-center">
          <h2 className="text-secondary  text-uppercase">
            Explore our Events
          </h2>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            labore veritatis natus, odio animi rem provident possimus cupiditate
            vitae, enim suscipit. Cum nihil similique minima doloremque atque
            unde iste totam.
          </p>
        </div>
        <div>
          <div
            className="p-5 mb-4 bg-body-tertiary rounded-3 shadow-sm"
            data-aos="fade-right"
          >
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Custom jumbotron</h1>
              <p className="col-md-8 fs-4">
                Using a series of utilities, you can create this jumbotron, just
                like the one in previous versions of Bootstrap. Check out the
                examples below for how you can remix and restyle it to your
                liking.
              </p>
              <button className="btn btn-primary btn-lg" type="button">
                Example button
              </button>
            </div>
          </div>
          <div className="row align-items-md-stretch">
            <div className="col-md-6 mb-3" data-aos="fade-up">
              <div className="h-100 p-5 text-bg-dark rounded-3 shadow-sm">
                <h2>Change the background</h2>
                <p>
                  Swap the background-color utility and add a `.text-*` color
                  utility to mix up the jumbotron look. Then, mix and match with
                  additional component themes and more.
                </p>
                <button className="btn btn-outline-light" type="button">
                  Example button
                </button>
              </div>
            </div>
            <div className="col-md-6 mb-3" data-aos="fade-up">
              <div className="h-100 p-5 bg-body-tertiary border rounded-3 shadow-sm">
                <h2>Add borders</h2>
                <p>
                  Or, keep it light and add a border for some added definition
                  to the boundaries of your content. Be sure to look under the
                  hood at the source HTML here as we've adjusted the alignment
                  and sizing of both column's content for equal-height.
                </p>
                <button className="btn btn-outline-secondary" type="button">
                  Example button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
      <div className="mb-3 text-center">
          <h2 className="text-secondary">
            Explore our latest Events
          </h2>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            labore veritatis natus, odio animi rem provident possimus cupiditate
            vitae, enim suscipit. Cum nihil similique minima doloremque atque
            unde iste totam.
          </p>
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

export default Events;
