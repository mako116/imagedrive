import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ServicesContentPage from "./pages/ServicesContent";
import DoctorsContentPage from "./pages/DoctorsContent";

// Dashboard
import LoginPage from "./pages/Dashboard/Login";
import RegisterPage from "./pages/Dashboard/Register";
import DashboardRootLayout from "./pages/Dashboard/DashboardRoot";
import DashboardHomePage from "./pages/Dashboard/DashboardHome";
import DashboardPatientsPage from "./pages/Dashboard/DashboardPatients";
 // Fonts
import "./fonts/Providence.ttf";
import DashboardServicePage from "./pages/Dashboard/DashboardServices";
import DashboardDoctor from "./pages/Dashboard/DashboardDoctor";
import DashBoardPartner from "./pages/Dashboard/DahboardPartner";
 import DashboardUpdate from "./pages/Dashboard/DashboardUpdate";
import DashboardTestimoni from "./pages/Dashboard/DashboardTestimonias";
import DashboardBoardAppointments from "./components/Dashboard/DashboardBookAppointment/DashboardAppointment";
import DashboardNews from "./pages/Dashboard/DashboardNews";
import DashboardUsers from "./pages/Dashboard/DashboardUsers";
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "services/:serviceId",
        element: <ServicesContentPage />,
      },
      {
        path: "doctors/:doctorId",
        element: <DoctorsContentPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "admin",
    element: <DashboardRootLayout />,
    children: [
      {
        index: true,
        element: <DashboardHomePage />,
      },
      {
        path: "patients",
        element: <DashboardPatientsPage />,
      },
      {
        path: "Services",
        element: <DashboardServicePage />,
      },
      {
        path: "Doctors",
        element: <DashboardDoctor />,
      },
      {
        path: "Partners",
        element: <DashBoardPartner />,
      },
      {
        path: "Testimonials",
        element: <DashboardTestimoni />,
      },
      {
        path: "Comments",
        element: <DashboardUpdate />,
     },
      {
        path: "book-appointment",
        element: <DashboardBoardAppointments />,
     },  
      {
        path: "news-update",
        element:<DashboardNews/>
     },  
      {
        path: "users",
        element:<DashboardUsers/>
     },  
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
