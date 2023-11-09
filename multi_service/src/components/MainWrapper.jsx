import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";

export default function MainWrapper() {
  const location = useLocation();
  const routesToHideFooter = ["/account", "/admin-account"];
  const shouldHideFooter = routesToHideFooter.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />
      <main className="flex-grow-1 bg-white" style={{ marginTop: "74.48px" }}>
        <Outlet />
        <BackToTopButton />
      </main>
      {!shouldHideFooter && <Footer />}
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.key;
        }}
      />
    </div>
  );
}
