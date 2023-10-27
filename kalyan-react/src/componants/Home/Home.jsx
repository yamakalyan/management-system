import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import "./Home.css";
import { Events } from "./NewsAndEvents/Events/Events";

const Home = () => {
  return (
    <div id="home" className="bg-light  text-dark">
      <div className="Home-page">
        <div className="home-bg-image">
          <div className="bg-transparent-color">
            <div className="container">
              <div className="row">
                <div className="col-md col-lg text-light">
                  <div className="my-5" data-aos="zoom-in">
                    <div className="py-5 text-center">
                      <div className="container py-5">
                        <h1 className="text-warning">Empowering Tomorrow's Leaders</h1>
                        <p className="col-lg-8 mx-auto lead text-white">
                          Random School: Where Dreams Soar. We foster
                          excellence and shape future leaders, creating a
                          vibrant community where every student's potential is
                          valued, and every dream takes flight.
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
      <Events />
      <Banner2 />
      <Contact />
    </div>
  );
};

export default Home;
