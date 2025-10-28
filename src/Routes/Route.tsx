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

import Adminlayout from "../Layout/Adminlayout";
import AdminOverview from "../Admin/adminoverview";
import AllTransactions from "../Admin/Alltransaction";
import Allusers from "../Admin/AllUsers";
import Userlayout from "../Layout/userlayout";
import Overview from "../Clients/Overview";
import Deposit from "../Clients/deposit";
import History from "../Clients/history";
import Withdraw from "../Clients/withdraw";
import Plans from "../Clients/plans";
import Market from "../Clients/market";

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

  {
    path: "admin",
    element: <Adminlayout />,
    children: [
      {
        path: "adminhome",
        element: <AdminOverview />,
      },
      {
        path: "alltransactions",
        element: <AllTransactions />,
      },
      {
        path: "allusers",
        element: <Allusers />,
      },
    ],
  },

  {
    path: "user",
    element: <Userlayout />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "deposit",
        element: <Deposit />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "withdraw",
        element: <Withdraw />,
      },
      {
        path: "my-plans",
        element: <Plans />,
      },
      {
        path: "market",
        element: <Market />,
      },
    ],
  },
]);
