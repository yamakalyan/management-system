export default function Contact() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row py-5" id="contact">
            <div className="col-md col-lg py-3" data-aos="zoom-out">
              <div
                className="text-center"
                style={{ display: "grid", placeItems: "center" }}
              >
                <h2 className="text-secondary display-4">Reach Out to Us</h2>
                <hr className="my-1 text-primary" style={{ width: "30%" }} />
                <p className="lead mt-0">
                  {/* reach to us if you have any queries. */}
                </p>
              </div>
              <form>
                <div className="input-group mb-3">
                  <span className="input-group-text">Enter Name</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full name"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Enter Mobile</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Enter Email</span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="input-group mb-3">
                  {/* <span className="input-group-text" >@</span> */}
                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Explain how can we help you "
                  />
                </div>
                <div className="text-center mb-3 d-grid ">
                  <button type="submit" className="btn btn-outline-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md col-lg my-auto">
              {/* <div>
                <h3>Regd. office : </h3>
                <p> Hyderabad-500072</p>
              </div>
              <div>
                <h3>Mobile number : </h3>
                <p>+91 9550049382</p>
              </div>
              <div>
                <h3>Email : </h3>
                <p>yamakalyan6@gmail.com</p>
              </div> */}
              <img src="college project-bro.svg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
