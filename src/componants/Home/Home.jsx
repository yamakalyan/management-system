import Products from "../Products/Products";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/Pricing";
import Hero from "../Hero/Hero";
import Staff from "../Staff/Staff";
import Events from "../Events/Events";
import WelCome from "../Welcome/WelCome";
// import Address from "../Address/Address";
const Home = () => {
  return (
    <div id="home">
    <div className="container">
    <div className="row">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Designed for engineers</h1>
          <h3 className="fw-normal text-muted mb-3">
            Build anything you want with Aperture
          </h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <a className="icon-link" href="#">
              Learn more
            </a>
            <a className="icon-link" href="#">
              Buy
            </a>
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      </div>
      </div>
      <Hero />
      <WelCome/>
      <Products />
      <Events/>
      <Pricing/>
      <About />
      <Staff />
      <About/>
      <Contact />
      {/* <Address/> */}
    </div>
  );
};

export default Home;
