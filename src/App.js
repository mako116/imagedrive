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
import DashboardServicePage from "./pages/Dashboard/DashboardServices";
import DashboardDoctor from "./pages/Dashboard/DashboardDoctor";
import DashBoardPartner from "./pages/Dashboard/DahboardPartner";
 import DashboardUpdate from "./pages/Dashboard/DashboardUpdate";
import DashboardTestimoni from "./pages/Dashboard/DashboardTestimonias";
import DashboardBoardAppointments from "./components/Dashboard/DashboardBookAppointment/DashboardAppointment";
import DashboardNews from "./pages/Dashboard/DashboardNews";
import DashboardUsers from "./pages/Dashboard/DashboardUsers";
 
 // Fonts
import "./fonts/Providence.ttf";
 import Newsupdates from "./pages/News&updates";
 import ProductDetails from "./components/Home/ProductDetails";
import Services from "./components/Home/Services";
import DashboardUser from "./components/Dashboard/DashboardUsers/DashboardUser";
import DashboardserviceUpdate from "./components/Dashboard/DashboardServices/DashboardServiceUpdates";
import DashboardTestUpdate from "./components/Dashboard/DashboardBookAppointment/DashboardTestUpdate";
 
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
        path: "services",
        element: <Services />,
      },
      {
        path: "news-updates",
        element: <Newsupdates />,
      },
      {
         path:"shop/:id",
        element: <ProductDetails/> ,
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
        path: "Services/1",
        element: <DashboardserviceUpdate />,
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
        path: "book-appointment/1",
        element: <DashboardTestUpdate />,
     },  
      {
        path: "news-update",
        element:<DashboardNews/>
     },  
      {
        path: "users",
        element:<DashboardUser/>
      },  
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
