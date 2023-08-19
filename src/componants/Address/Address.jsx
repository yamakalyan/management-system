const Address = () => {
  return (
    <div>
      <div>
        <div className="container" data-aos="zoom-out">
          <div className="row py-5">
            <div className="col-md col-lg">
              <div>
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
              </div>
            </div>
            <div className="col-md col-lg">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1692383356475!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
