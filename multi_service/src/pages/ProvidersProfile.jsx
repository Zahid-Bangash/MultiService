import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import ProviderServices from "../components/ProviderServices";
import ProviderReviews from "../components/ProviderReviews";
import AboutProvider from "../components/AboutProvider";
import ProviderGallery from "./../components/ProviderGallery";

import banner from "../assets/banner.png";
import profile from "../assets/profile.jpg";

export default function ProvidersProfile() {
  const [isFav, setIsFav] = useState(false);
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div className="container py-5">
        <div className="shadow bg-white" style={{ borderRadius: "10px" }}>
          <img
            src={banner}
            alt="banner"
            style={{ width: "100%", borderRadius: "10px 10px 0 0" }}
          />
          <div className="px-0 px-md-5">
            <div
              className="d-flex flex-column flex-md-row align-items-center align-items-md-end"
              style={{ marginTop: "-60px", marginBottom: "60px" }}
            >
              <div className="position-relative me-md-3 mb-3 mb-md-0">
                <img
                  src={profile}
                  alt="profile"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    border: "5px solid white",
                  }}
                />
                <div
                  style={{
                    color: "rgba(34, 180, 75, 1)",
                    position: "absolute",
                    bottom: 15,
                    right: 5,
                    padding: "3px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircleIcon />
                </div>
              </div>
              <div
                className="d-flex flex-column"
                style={{ marginBottom: "-40px" }}
              >
                <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                  <div
                    className="me-3"
                    style={{ fontSize: "24px", fontWeight: "600" }}
                  >
                    Mark Phillips
                  </div>
                  <StarIcon style={{ width: "20px", height: "20px" }} />
                  <div className="mx-1" style={{ fontWeight: "600" }}>
                    5.0
                  </div>
                  <div className="text-secondary" style={{ fontSize: "14px" }}>
                    (24)
                  </div>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start mb-3">
                  <div
                    className="text-secondary py-1 px-2 me-2"
                    style={{
                      borderRadius: "100px",
                      border: "1px solid lightgrey",
                      fontSize: "12px",
                    }}
                  >
                    Home Repair
                  </div>
                  <div
                    className="text-secondary py-1 px-2 me-2"
                    style={{
                      borderRadius: "100px",
                      border: "1px solid lightgrey",
                      fontSize: "12px",
                    }}
                  >
                    Repair
                  </div>
                  <div
                    className="text-secondary py-1 px-2 me-2"
                    style={{
                      borderRadius: "100px",
                      border: "1px solid lightgrey",
                      fontSize: "12px",
                    }}
                  >
                    Office Repair
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center justify-content-md-start text-secondary"
                  style={{ fontSize: "14px" }}
                >
                  <div className="d-flex align-items-center me-4">
                    <FmdGoodOutlinedIcon
                      className="me-1"
                      style={{ width: "20px", height: "20px" }}
                    />
                    New York, USA
                  </div>
                  <div className="d-flex align-items-center">
                    <ChatBubbleOutlineRoundedIcon
                      className="me-1"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginBottom: "-3px",
                      }}
                    />
                    <div>English, Spanish</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-md-start my-4">
              <div
                className="primaryButton px-5 me-0 me-sm-3 mb-3 mb-sm-0"
                style={{ width: "160px" }}
              >
                Hire me
              </div>
              <div
                className="secondaryButton px-5 me-0 me-sm-3 mb-3 mb-sm-0"
                style={{ width: "160px" }}
              >
                Message
              </div>
              <div
                className="secondaryButton p-2"
                onClick={() => setIsFav(!isFav)}
              >
                {isFav ? (
                  <FavoriteOutlinedIcon
                    style={{ width: "28px", height: "28px" }}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon
                    style={{ width: "28px", height: "28px" }}
                  />
                )}
              </div>
            </div>
          </div>
          <hr className="m-0" />
          <div className="tabs px-5">
            <MenuOpenIcon
              style={{ width: "50px", height: "50px" }}
              className="d-lg-none cursor-pointer"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasResponsive"
            />
            {/* offcanvas */}
            <div
              className="offcanvas-lg offcanvas-start"
              tabIndex="-1"
              id="offcanvasResponsive"
              aria-labelledby="offcanvasResponsiveLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#offcanvasResponsive"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  <div
                    className={`py-3 me-5 cursor-pointer d-inline-block ${
                      activeTab === "services"
                        ? "primary-color"
                        : "text-secondary"
                    }`}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      borderBottom:
                        activeTab === "services"
                          ? "2px solid #4c40ed"
                          : "2px solid white",
                    }}
                    onClick={() => setActiveTab("services")}
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                  >
                    Services
                  </div>
                </div>
                <div>
                  <div
                    className={`py-3 me-5 cursor-pointer d-inline-block ${
                      activeTab === "reviews"
                        ? "primary-color"
                        : "text-secondary"
                    }`}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      borderBottom:
                        activeTab === "reviews"
                          ? "2px solid #4c40ed"
                          : "2px solid white",
                    }}
                    onClick={() => setActiveTab("reviews")}
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                  >
                    Reviews
                  </div>
                </div>
                <div>
                  <div
                    className={`py-3 me-5 cursor-pointer d-inline-block ${
                      activeTab === "about" ? "primary-color" : "text-secondary"
                    }`}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      borderBottom:
                        activeTab === "about"
                          ? "2px solid #4c40ed"
                          : "2px solid white",
                    }}
                    onClick={() => setActiveTab("about")}
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                  >
                    About
                  </div>
                </div>
                <div>
                  <div
                    className={`py-3 me-5 cursor-pointer d-inline-block ${
                      activeTab === "gallery"
                        ? "primary-color"
                        : "text-secondary"
                    }`}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      borderBottom:
                        activeTab === "gallery"
                          ? "2px solid #4c40ed"
                          : "2px solid white",
                    }}
                    onClick={() => setActiveTab("gallery")}
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                  >
                    Gallery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-lg-8 mb-5 mb-lg-0">
            {activeTab === "services" && <ProviderServices />}
            {activeTab === "reviews" && <ProviderReviews />}
            {activeTab === "about" && <AboutProvider />}
            {activeTab === "gallery" && <ProviderGallery />}
          </div>
          <div className="col-12 col-lg-4">
            <div
              className="shadow mb-4 p-4 bg-white"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="mb-4"
                style={{ fontSize: "24px", fontWeight: "500" }}
              >
                Business Hours
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "16px", fontWeight: "500" }}>
                  Sunday:
                </div>
                <div className="text-secondary" style={{ fontSize: "16px" }}>
                  Closed
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "16px", fontWeight: "500" }}>
                  Monday:
                </div>
                <div className="text-secondary" style={{ fontSize: "16px" }}>
                  10am to 6pm
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "16px", fontWeight: "500" }}>
                  Tuesday:
                </div>
                <div className="text-secondary" style={{ fontSize: "16px" }}>
                  10am to 6pm
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "16px", fontWeight: "500" }}>
                  Wednesday:
                </div>
                <div className="text-secondary" style={{ fontSize: "16px" }}>
                  10am to 6pm
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "16px", fontWeight: "500" }}>
                  Thursday:
                </div>
                <div className="text-secondary" style={{ fontSize: "16px" }}>
                  10am to 6pm
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "16px", fontWeight: "500" }}>
                  Saturday:
                </div>
                <div className="text-secondary" style={{ fontSize: "16px" }}>
                  7am to 2pm
                </div>
              </div>
            </div>
            <div
              className="shadow p-4"
              style={{ borderRadius: "10px", backgroundColor: "white" }}
            >
              <div
                className="mb-4"
                style={{ fontSize: "24px", fontWeight: "500" }}
              >
                Share Profile
              </div>
              <div className="d-flex">
                <div
                  className="me-2 cursor-pointer"
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
                  className="me-2 cursor-pointer"
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
                  className="me-2 cursor-pointer"
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
                  className="cursor-pointer"
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
    </div>
  );
}
