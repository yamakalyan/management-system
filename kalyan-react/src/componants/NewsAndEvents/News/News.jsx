const News = () => {
  return (
    <div>
      <div className="container py-4">
        <div className="mb-3 py-2">
          <h2 className="text-secondary display-5 ">
            News
          </h2>
          <hr style={{width : "50%", borderTop : "4px solid green"}}/>
        </div>
        <div>
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
          <div className="row">
            <div className="col-md mb-3" data-aos="fade-up">
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
      </div>
    </div>
  );
};

export default News;
