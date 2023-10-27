import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

//Landing page HOME routes
import Navbar from "./componants/Navbar/Navbar";
import Home from "./componants/Home/Home";
import Footer from "./componants/Home/Footer/Footer";
import Login from "./componants/Home/Login/Login";
import ForgotPassword from "./componants/Home/Login/ForgotPassword/ForgotPassword";
import NewsAndEvents from "./componants/Home/NewsAndEvents/NewsAndEvents";
import Contact from "./componants/Home/Contact/Contact";
import AdmissionProcess from "./componants/Home/Admissions/ADmissionProcess/AdmissionProcess";
import AdmissionReq from "./componants/Home/Admissions/AdmissionReq/AdmissionReq";
import ScholarShip from "./componants/Home/Admissions/ScholarShip/ScholarShip";
import Notification from "./componants/Home/NewsAndEvents/Notifications/Notifications";
import ScrollTopBtn from "./componants/Home/ScrollTop/ScrollTopBtn";
import About from "./componants/Home/About/About";
import { Events } from "./componants/Home/NewsAndEvents/Events/Events";
import { Admission } from "./componants/Home/Admissions/Admission";
import { Faculty } from "./componants/Home/Faculty/Faculty";

import { Authentication } from "./componants/Authorizers/Authentication";
import { Profile } from "./componants/Profile/Profile";
import { Dashboard } from "./componants/Management/Dashboard/Dashboard";
import { Accounting } from "./componants/Management/Accounting/Accounting";
import Attendance from "./componants/Management/Attendance/Attendance";
import { CreateExpanse } from "./componants/Management/Add/CreateExpanse";
import { CreateEvent } from "./componants/Management/Add/AddRoutes/CreateEvent";
import { Expanses } from "./componants/Management/Add/AddRoutes/Expanses";
import { Other } from "./componants/Management/Add/AddRoutes/Other";
import { ReportCards } from "./componants/ReportCards/ReportCards";

import Notifications from "./componants/Management/Add/AddRoutes/Notifications";
import Sports from "./componants/Management/Add/AddRoutes/Sports";
import Labrotory from "./componants/Management/Add/AddRoutes/Labrotory";
import Library from "./componants/Management/Add/AddRoutes/Library";

// NAV LINKS FOR CONDITIONAL ACTIVATING ROUTES
import { conditionalRoutes } from "./componants/Navbar/NavRoutes/NavRoutes";
import FeemanagementAdd from "./componants/Management/Add/AddRoutes/FeemanagementAdd";
import SalariesAdd from "./componants/Management/Add/AddRoutes/SalariesAdd";
import ViewOutlet from "./componants/Management/Accounting/ViewOutlet/ViewOutlet";
import AccountingOutlet from "./componants/Management/Accounting/Main/AccountingOutlet";
import UniqueView from "./componants/Management/Accounting/UniqueView/UniqueView";
import StudentCreate from "./componants/Management/Add/AddRoutes/StudentCreate";
import StaffCreate from "./componants/Management/Add/AddRoutes/StaffCreate";
import TablesView from "./componants/Management/Accounting/UniqueView/Oulets/TablesView";
import HallticketsAdd from "./componants/Management/Add/AddRoutes/HallticketsAdd";
import ReportCardsAdd from "./componants/Management/Add/AddRoutes/ReportCardsAdd";
import ShowAttendance from "./componants/Management/Attendance/ShowAttendance/ShowAttendance";
import UploadAttendance from "./componants/Management/Attendance/UploadAttendance/UploadAttendance";
import Search from "./componants/Management/Search/Search";
import NotFound404 from "./componants/Home/NotFound/NotFound404";
import {
  AuthManageStaff,
  AuthManagementMiddleWare,
} from "./componants/Authorizers/AuthMiddleWare";

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
      return name.name.heading;
    });
  }, []);

  return (
    <Authentication>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        {/* DASHBOARD*/}
        <Route
          path="/dashboard/:name"
          element={
            <AuthManagementMiddleWare>
              <Dashboard />
            </AuthManagementMiddleWare>
          }
        />
        {/* ACCOUNTING*/}
        <Route
          path="/accounting"
          element={
            <AuthManagementMiddleWare>
              <Accounting />
            </AuthManagementMiddleWare>
          }
        >
          <Route
            path="/accounting/:name"
            element={
              <AuthManagementMiddleWare>
                <AccountingOutlet />
              </AuthManagementMiddleWare>
            }
          />

          <Route
            path="/accounting/:group/:name"
            element={
              <AuthManagementMiddleWare>
                <ViewOutlet />
              </AuthManagementMiddleWare>
            }
          />
        </Route>

        {/* PROFILE */}
        <Route
          path="/profile/:name"
          element={
            <AuthManagementMiddleWare>
              <Profile />
            </AuthManagementMiddleWare>
          }
        />

        {/* SEARCH */}
        <Route path="/search" element={<Search />} />
        <Route path="/search/:type/:id" element={<UniqueView />}>
          <Route path="/search/:type/:id/:list" element={<TablesView />} />
        </Route>

        {/* ATTENDANCE */}
        <Route path="/attendance" element={<Attendance />}>
          <Route
            path="/attendance/:name"
            element={
              <AuthManageStaff>
                <UploadAttendance />
              </AuthManageStaff>
            }
          />
          <Route path="/attendance/:name/show" element={<ShowAttendance />} />
        </Route>

        {/* ADDING */}
        <Route
          path="/add/"
          element={
            <AuthManageStaff>
              <CreateExpanse />
            </AuthManageStaff>
          }
        >
          <Route
            path="/add/staff"
            element={
              <AuthManagementMiddleWare>
                <StaffCreate />
              </AuthManagementMiddleWare>
            }
          />
          <Route
            path="/add/fee"
            element={
              <AuthManagementMiddleWare>
                <FeemanagementAdd />
              </AuthManagementMiddleWare>
            }
          />
          <Route
            path="/add/salaries"
            element={
              <AuthManagementMiddleWare>
                <SalariesAdd />
              </AuthManagementMiddleWare>
            }
          />
          <Route
            path="/add/expanses"
            element={
              <AuthManagementMiddleWare>
                <Expanses />
              </AuthManagementMiddleWare>
            }
          />
          <Route
            path="/add/events"
            element={
              <AuthManagementMiddleWare>
                <CreateEvent />
              </AuthManagementMiddleWare>
            }
          />
          <Route
            path="/add/notifications"
            element={
              <AuthManagementMiddleWare>
                <Notifications />
              </AuthManagementMiddleWare>
            }
          />
          <Route
            path="/add/student"
            element={
              <AuthManageStaff>
                <StudentCreate />
              </AuthManageStaff>
            }
          />
          <Route
            path="/add/halltickets"
            element={
              <AuthManageStaff>
                <HallticketsAdd />
              </AuthManageStaff>
            }
          />
          <Route
            path="/add/reportcards"
            element={
              <AuthManageStaff>
                <ReportCardsAdd />
              </AuthManageStaff>
            }
          />
          <Route path="/add/others" element={<Other />} />

          <Route path="/add/sports" element={<Sports />} />
          <Route path="/add/laboratory" element={<Labrotory />} />
          <Route path="/add/library" element={<Library />} />
        </Route>

        {/* CARDS */}
        <Route path="/cards/:name" element={<ReportCards />} />

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

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
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <ScrollTopBtn />
      <Footer />
    </Authentication>
  );
}

export default App;
