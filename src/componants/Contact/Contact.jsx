export default function Contact() {
  return (
    <div>
      <div>
        <div className="container" data-aos="zoom-out">
          <div className="row" id="contact">
            <div className="col-md col-lg py-3">
              <div className="text-center">
                <h2 className="text-secondary display-4">Contact us</h2>
                <hr className="my-1" />
                <p className="lead mt-0">
                  {/* reach to us if you have any queries. */}
                </p>
              </div>
              <form>
                <div className="form-group mb-3">
                  {/* <label className="float-left">Enter name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full name"
                  />
                </div>
                <div className="form-group mb-3">
                  {/* <label className="float-left">Enter mobile</label> */}
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile"
                  />
                </div>
                <div className="form-group mb-3">
                  {/* <label className="float-left">Enter Email</label> */}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group mb-3">
                  {/* <label className="float-left">Write your message here</label> */}
                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Explain how can we help you "
                  />
                </div>
                <div className="text-center mb-3">
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
