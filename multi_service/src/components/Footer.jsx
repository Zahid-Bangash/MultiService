import React from "react";
import { Link } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundColor: "#040106", color: "white" }}
    >
      <div className="container p-3">
        <hr style={{ color: "lightgrey" }} />
        <div className="row py-5">
          <div className="col-md-6">
            <Link to="/" className="text-decoration-none text-white">
              <h1 className="mb-3" style={{ fontWeight: "600" }}>
                Multi<span style={{ fontWeight: "300" }}>service</span>
              </h1>
            </Link>
            <p className="mb-4" style={{ lineHeight: "26px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nemo est, aut id quae vel! Molestiae dolor reprehenderit quam
              perspiciatis omnis saepe ipsam doloremque illum,.
            </p>
            <div className="d-flex">
              <div
                className="py-1 ps-3 pe-4 me-3"
                style={{ border: "1px solid white", borderRadius: "10px" }}
              >
                <div className="d-flex align-items-center">
                  <AppleIcon
                    className="me-2"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div>
                    <div
                      className="mb-1"
                      style={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      Download on the
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "400" }}>
                      App Store
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="py-1 ps-3 pe-4"
                style={{ border: "1px solid white", borderRadius: "10px" }}
              >
                <div className="d-flex align-items-center">
                  <AppleIcon
                    className="me-2"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "400" }}>
                      Get it on
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "400" }}>
                      Google Play
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 pt-3">
            <h5 className="mb-4">Quick Links</h5>
            <div className="mb-3">
              <Link
                to="/"
                className="text-decoration-none text-white"
                style={{ fontWeight: "400" }}
              >
                Products
              </Link>
            </div>
            <div className="mb-3">
              <Link
                to="/"
                className="text-decoration-none text-white"
                style={{ fontWeight: "400" }}
              >
                Support
              </Link>
            </div>
            <div className="mb-3">
              <Link
                to="/"
                className="text-decoration-none text-white"
                style={{ fontWeight: "400" }}
              >
                Terms & Policy
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="text-decoration-none text-white"
                style={{ fontWeight: "400" }}
              >
                Cookies
              </Link>
            </div>
          </div>
          <div className="col-md-3 pt-3">
            <h5 className="mb-4">Follow Us</h5>
            <div className="d-flex">
              <div
                className="me-2"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#1877F2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "16px",
                    height: "16px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fa fa-facebook"
                    style={{ color: "#1877F2", marginTop: "2px" }}
                  ></i>
                </div>
              </div>
              <div
                className="me-2"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#1DA1F2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa fa-twitter" style={{ color: "white" }}></i>
              </div>
              <div
                className="me-2"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#2867B2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa fa-linkedin" style={{ color: "white" }}></i>
              </div>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#FF0000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fa fa-youtube-play"
                  style={{ color: "white" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
