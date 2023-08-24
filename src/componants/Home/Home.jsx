import Products from "../Products/Products";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/Pricing";
import Hero from "../Hero/Hero";
import Staff from "../Staff/Staff";
import Events from "../Events/Events";
import Banner1 from "../Banners/Banner1";
import Address from "../Address/Address";
import Banner2 from "../Banners/Banner2";
import Banner3 from "../Banners/Banner3";
import "./Home.css";
const Home = () => {
  return (
    <div id="home" >
      <div className="Home-page">
        <div className="home-bg-image">
          <div className="bg-transparent-color">
            <div className="container">
              <div className="row">
                <div className="col-md col-lg text-light">
                  <div className="my-5" data-aos="zoom-in">
                    <div className="py-5 text-center">
                      <div className="container py-5">
                        <h1 className="">
                          Banner 1 Description
                        </h1>
                        <p className="col-lg-8 mx-auto lead">
                          This takes the basic jumbotron above and makes its
                          background edge-to-edge with a <code>.container</code>{" "}
                          inside to align content. Similar to above, it's been
                          recreated with built-in grid and utility classes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <Banner1 />
      <Products />
      <Events />
      <Pricing />
      <Banner2 />
      <Staff />
      <Banner3 />
      <Contact />
      {/* <Address/> */}
    </div>
  );
};

export default Home;
