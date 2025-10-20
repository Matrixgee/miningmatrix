import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Page/Home";
import AboutUs from "../Page/Aboutus";
import ContactUs from "../Page/Contact";
import AuthLayout from "../Layout/Authlayout";
import Login from "../Auth/login";
import Register from "../Auth/Register";
import ForgotPassword from "../Auth/Forgetpassword";
import ResetPassword from "../Auth/Resetpassword";

export const MainRoute = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forget-pass",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);
