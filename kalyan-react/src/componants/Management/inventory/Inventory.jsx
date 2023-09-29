

export const Inventory = () => {
  return (
    <div>
      <div className="container">
        <div className=" py-5">
        <div className="mb-5">
          <h1 className="text-success font-monospace">Inventory </h1>
          <p className="font-monospace">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ea
            repudiandae molestiae architecto.
          </p>
        </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">Lab Records</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">Sports Items</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm ">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid py-3 px-4"
                />
                <div className="card-body">
                  <p className="card-text">Library Records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
