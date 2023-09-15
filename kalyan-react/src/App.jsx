import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./componants/Navbar/Navbar";
import Home from "./componants/Home/Home";
import Footer from "./componants/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./componants/Login/Login";
import ForgotPassword from "./componants/Login/ForgotPassword/ForgotPassword";
import { Authentication } from "./componants/Authorizers/Authentication";
import { Profile } from "./componants/Profile/Profile";
import { Dashboard } from "./componants/Dashboard/Dashboard";
import { Accounting } from "./componants/Management/Accounting/Accounting";
import { Attendance } from "./componants/Management/Attendance/Attendance";
import { CreateExpanse } from "./componants/Add/CreateExpanse";
import { CreateEvent } from "./componants/Add/AddRoutes/CreateEvent";
import { Expanses } from "./componants/Add/AddRoutes/Expanses";
import { Other } from "./componants/Add/AddRoutes/Other";
import { FeeManagement } from "./componants/FeeManagement/FeeManagement";
import { ReportCards } from "./componants/ReportCards/ReportCards";
import { Inventory } from "./componants/inventory/Inventory";
import About from "./componants/About/About";
import { Admission } from "./componants/Admissions/Admission";
import { Faculty } from "./componants/Faculty/Faculty";
import NewsAndEvents from "./componants/NewsAndEvents/NewsAndEvents";
import Contact from "./componants/Contact/Contact";
import AdmissionProcess from "./componants/Admissions/ADmissionProcess/AdmissionProcess";
import AdmissionReq from "./componants/Admissions/AdmissionReq/AdmissionReq";
import ScholarShip from "./componants/Admissions/ScholarShip/ScholarShip";
import { Events } from "./componants/NewsAndEvents/Events/Events";
import News from "./componants/NewsAndEvents/News/News";
import Notifications from "./componants/NewsAndEvents/Notifications/Notifications";

function App() {
  AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <Authentication>
      <Navbar />
      {/* <Header/> */}
      <Routes>
        {/* HOME PAGE */}

        <Route path="/" element={<Home />} />
        <Route path="/login/:name" element={<Login />} />
        <Route path="/forgotpassword/:name" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />}>
          <Route
            path="/admission/admissionprocess"
            element={<AdmissionProcess />}
          />
          <Route
            path="/admission/admissionrequirements"
            element={<AdmissionReq />}
          />
          <Route path="/admission/scholarships" element={<ScholarShip />} />
        </Route>
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/newsandevents" element={<NewsAndEvents />} >
          <Route path="/newsandevents/events" element={<Events/>} />
          <Route path="/newsandevents/news" element={<News/>} />
          <Route path="/newsandevents/eventscalendar" element={<Notifications/>} />
        </Route>

        <Route path="/contact" element={<Contact />} />

        {/* Profile */}
        <Route path="/profile/:name" element={<Profile />} />

        {/* Dashboard */}
        <Route path="/dashboard/:name" element={<Dashboard />} />

        {/* Accounting */}
        <Route path="/accounting/:name" element={<Accounting />} />

        {/* Attendance */}
        <Route path="/attendance/:name" element={<Attendance />} />

        {/* Adding or create */}
        <Route path="/add/" element={<CreateExpanse />}>
          <Route path="/add/expanses" element={<Expanses />} />
          <Route path="/add/events" element={<CreateEvent />} />
          <Route path="/add/others" element={<Other />} />
        </Route>

        {/* Fee management */}
        <Route path="/fee-management" element={<FeeManagement />} />

        {/* inventory */}
        <Route path="/inventory" element={<Inventory />} />

        {/* Report cards */}
        <Route path="/report-cards" element={<ReportCards />} />
      </Routes>
      <Footer />
    </Authentication>
  );
}

export default App;
