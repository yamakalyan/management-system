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
import { CreateExpanse } from "./componants/Management/Add/CreateExpanse";
import { CreateEvent } from "./componants/Management/Add/AddRoutes/CreateEvent";
import { Expanses } from "./componants/Management/Add/AddRoutes/Expanses";
import { Other } from "./componants/Management/Add/AddRoutes/Other";
import { ReportCards } from "./componants/ReportCards/ReportCards";
import { Inventory } from "./componants/Management/inventory/Inventory";
import About from "./componants/About/About";
import { Admission } from "./componants/Admissions/Admission";
import { Faculty } from "./componants/Faculty/Faculty";
import NewsAndEvents from "./componants/NewsAndEvents/NewsAndEvents";
import Contact from "./componants/Contact/Contact";
import AdmissionProcess from "./componants/Admissions/ADmissionProcess/AdmissionProcess";
import AdmissionReq from "./componants/Admissions/AdmissionReq/AdmissionReq";
import ScholarShip from "./componants/Admissions/ScholarShip/ScholarShip";
import { Events } from "./componants/NewsAndEvents/Events/Events";
import Notifications from "./componants/Management/Add/AddRoutes/Notifications";
import Notification from "./componants/NewsAndEvents/Notifications/Notifications";
import ViewAccounting from "./componants/Management/Accounting/ViewAccounting/ViewAccounting";
import Sports from "./componants/Management/Add/AddRoutes/Sports";
import Labrotory from "./componants/Management/Add/AddRoutes/Labrotory";
import Library from "./componants/Management/Add/AddRoutes/Library";
import Salaries from "./componants/Management/Accounting/Outlets/Salaries";
import ShowExpanses from "./componants/Management/Accounting/Outlets/ShowExpanses";
import FeeManagement from "./componants/Management/Accounting/Outlets/FeeManagement";

// NAV LINKS FOR CONDITIONAL ACTIVATING ROUTES
import { conditionalRoutes } from "./componants/Navbar/NavRoutes/NavRoutes";
import { useEffect } from "react";
import FeemanagementAdd from "./componants/Management/Add/AddRoutes/FeemanagementAdd";
import SalariesAdd from "./componants/Management/Add/AddRoutes/SalariesAdd";

function App() {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    throttleDelay: 99,
    offset: 0,
    delay: 0,
    duration: 700,
    easing: "ease",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  useEffect(() => {
    const homeRoutes = conditionalRoutes.map((name) => {
      return name.name.heading
    })
  }, []);

  return (
    <Authentication>
      <Navbar />
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
        <Route path="/newsandevents" element={<NewsAndEvents />}>
          <Route path="/newsandevents/events" element={<Events />} />
          <Route
            path="/newsandevents/notifications"
            element={<Notification />}
          />
        </Route>
        <Route path="/contact" element={<Contact />} />

        {/* Profile */}
        <Route path="/profile/:name" element={<Profile />} />

        {/* Dashboard */}
        <Route path="/dashboard/:name" element={<Dashboard />} />

        {/* Accounting */}
        <Route path="/accounting" element={<Accounting />}>
          <Route
            path="/accounting/:group/:name"
            element={<ViewAccounting />}
          />
          <Route path="/accounting/salaries" element={<Salaries />} />
          <Route path="/accounting/expanses" element={<ShowExpanses />} />
          <Route path="/accounting/feemanagement" element={<FeeManagement />} />
        </Route>

        {/* Attendance */}
        <Route path="/attendance/:name" element={<Attendance />} />
        <Route path="/attendance/:name" element={<Attendance />} />

        {/* Adding or create */}
        <Route path="/add/" element={<CreateExpanse />}>
          <Route path="/add/fee" element={<FeemanagementAdd />} />
          <Route path="/add/salaries" element={<SalariesAdd />} />
          <Route path="/add/expanses" element={<Expanses />} />
          <Route path="/add/events" element={<CreateEvent />} />
          <Route path="/add/notifications" element={<Notifications />} />
          <Route path="/add/sports" element={<Sports />} />
          <Route path="/add/laboratory" element={<Labrotory />} />
          <Route path="/add/library" element={<Library />} />
          <Route path="/add/others" element={<Other />} />
        </Route>
        {/* inventory */}
        <Route path="/inventory/:name" element={<Inventory />} />

        {/* Report cards */}
        <Route path="/cards/:name" element={<ReportCards />} />
      </Routes>
      <Footer />
    </Authentication>
  );
}

export default App;
