import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ContextProvider from "./components/ContextProvider";
import useAuth from "./Hooks/UseAuth";

import MainWrapper from "./components/MainWrapper";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ProvidersList from "./pages/ProvidersList";
import ServiceList from "./pages/ServiceList";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import JobApply from "./pages/JobApply";
import CreateService from "./pages/CreateService";
import ServiceDetails from "./pages/ServiceDetails";
//import Loading from "../src/components/Loading";

function App() {
  const { user, userLoading, isAdmin } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainWrapper />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" replace />,
        },
        {
          path: "/home",
          element: <ServiceList />,
        },
        {
          path: "/jobs/:title",
          element: <JobDetails />,
        },
        {
          path: "/services/:title",
          element: <ServiceDetails />,
        },
        {
          path: "/apply-for-job",
          element: <JobApply />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
          //  userLoading ? (
          //    <Loading />
          //  ) : user && user.emailVerified ? (
          //    isAdmin ? (
          //      <Navigate to="/admin-account/profile" replace />
          //    ) : (
          //      <Navigate to="/account/dashboard" replace />
          //    )
          //  ) : (
          //    <Login />
          //  ),
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "/register",
          element: <Register />,
          //   userLoading ? (
          //    <Loading />
          //  ) : user && user.emailVerified ? (
          //    isAdmin ? (
          //      <Navigate to="/admin-account/profile" replace />
          //    ) : (
          //      <Navigate to="/account/dashboard" replace />
          //    )
          //  ) : (
          //    <Register />
          //  ),
        },
      ],
    },
  ]);

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
