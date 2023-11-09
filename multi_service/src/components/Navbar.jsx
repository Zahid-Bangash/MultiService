//import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, Navlink } from "react-router-dom";
//import { signOut } from "firebase/auth";
//import { auth } from "../configuration/firebase-config";
//import { Context } from "./ContextProvider";
//import useAuth from "../Hooks/UseAuth";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import ExpandLessIcon from "@mui/icons-material/ExpandLess";

//import profile from "../assets/profile.jpg";

export default function Navbar() {
  //  const { user } = useAuth();
  //  const { userData } = useContext(Context);
  //  const dropdownRef = useRef(null);
  //  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  //  const handleLogout = async () => {
  //    try {
  //      await signOut(auth);
  //    } catch (error) {
  //      console.error("Error logging out:", error.message);
  //    }
  //  };

  //  useEffect(() => {
  //    const handleDropdownShow = () => {
  //      setIsDropDownOpen(true);
  //    };

  //    const handleDropdownHide = () => {
  //      setIsDropDownOpen(false);
  //    };

  //    let currentDropdownRef = dropdownRef.current;

  //    if (currentDropdownRef) {
  //      currentDropdownRef.addEventListener(
  //        "shown.bs.dropdown",
  //        handleDropdownShow
  //      );
  //      currentDropdownRef.addEventListener(
  //        "hidden.bs.dropdown",
  //        handleDropdownHide
  //      );
  //    }

  //    return () => {
  //      if (currentDropdownRef) {
  //        currentDropdownRef.removeEventListener(
  //          "shown.bs.dropdown",
  //          handleDropdownShow
  //        );
  //        currentDropdownRef.removeEventListener(
  //          "hidden.bs.dropdown",
  //          handleDropdownHide
  //        );
  //      }
  //    };
  //  }, [dropdownRef.current]);

  return (
    <nav
      className="navbar navbar-expand-lg bg-white px-lg-5 fixed-top"
      style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
      id="navbar"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h3>Multiservice</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="#offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <div data-bs-dismiss="offcanvas">
              <Link className="navbar-brand p-0" to="/">
                <h3>Multiservice</h3>
              </Link>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link fw-bold"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link fw-bold"
                  aria-current="page"
                  to="/set-up-my-business"
                >
                  Set Up My Business
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link className="nav-link fw-bold" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/*{user?.emailVerified ? (
              <div className="d-flex align-items-center">
                <div data-bs-dismiss="offcanvas">
                  <Link
                    to="/create-event"
                    className="primaryButton py-2 me-3 text-decoration-none"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="dropdown pe-3" ref={dropdownRef}>
                  <div
                    className="nav-link cursor-pointer nav-profile d-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <span className="d-none d-md-block">
                      {userData.name}
                    </span>
                    <img
                      src={userData.image ? userData.image : profile}
                      alt="Profile"
                      className="rounded-circle mx-2"
                      style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    />
                    {isDropDownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </div>
                  <ul
                    className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile me-2"
                    style={{ minWidth: "240px" }}
                  >
                    <li className="dropdown-header">
                      <h6>{userData.name}</h6>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        to="/account"
                      >
                        <i className="fa fa-user-o"></i>
                        <span>My Account</span>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <div
                        className="dropdown-item d-flex align-items-center cursor-pointer"
                        //onClick={handleLogout}
                      >
                        <i className="fa fa-sign-out"></i>
                        <span>Sign Out</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (*/}

            <div className="right d-flex align-items-center">
              <div data-bs-dismiss="offcanvas">
                <Link
                  className={({ isActive }) =>
                    isActive
                      ? "login fw-bold me-4 cursor-pointer text-decoration-none loginButtonActive"
                      : "login fw-bold me-4 cursor-pointer text-decoration-none"
                  }
                  to="/register"
                >
                  Register
                </Link>
              </div>
              <div data-bs-dismiss="offcanvas">
                <Link to="/login" className="text-decoration-none">
                  <div className="primaryButton py-2">Login</div>
                </Link>
              </div>
            </div>
            {/*)}*/}
          </div>
        </div>
      </div>
    </nav>
  );
}
