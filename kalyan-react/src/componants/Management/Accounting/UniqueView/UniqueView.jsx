const UniqueView = () => {
  return (
    <div>
      <div className="container py-5 my-4">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 py-4">
          <div className="col"></div>
          <div className="col">
            <div className="headings">
              <h1>Student or Staff name here</h1>
              <br />
            </div>
            <div className="details">
              <h4>Sub-heading here</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                voluptatibus est dolores, quasi quas dignissimos deserunt odit
                commodi, id officiis, quo iste velit.
              </p>
              <br />
              <h4>Sub-heading here</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                voluptatibus est dolores, quasi quas dignissimos deserunt odit
                commodi, id officiis, quo iste velit.
              </p>
              <br />
            </div>
            <div className="additional-details">
              <h5>Sub-heading here</h5>
              <p>
                architecto tenetur hic voluptatum possimus cupiditate expedita
                odit commodi, id officiis, quo iste velit.
              </p>
            </div>
            <br />
            <div className="alerts">
              <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary me-3" type="button">
                  Button
                </button>
                <button className="btn btn-primary me-3" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueView;
