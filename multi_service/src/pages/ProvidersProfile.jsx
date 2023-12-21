import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

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
          <div className="px-0 px-sm-5">
            <div
              className="d-flex flex-column flex-sm-row align-items-center align-items-sm-end"
              style={{ marginTop: "-60px", marginBottom: "60px" }}
            >
              <div className="position-relative me-sm-3 mb-3 mb-sm-0">
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
              </div>
              <div
                className="d-flex flex-column"
                style={{ marginBottom: "-40px" }}
              >
                <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3">
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
                <div className="d-flex justify-content-center justify-content-sm-start mb-3">
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
                  className="d-flex justify-content-center justify-content-sm-start text-secondary"
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
            <div className="d-flex justify-content-center justify-content-sm-start my-4">
              <div className="primaryButton px-5 me-2">Hire me</div>
              <div className="secondaryButton px-5 me-2">Message</div>
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
          <div className="d-flex px-5">
            <div
              className={`py-3 me-5 cursor-pointer ${
                activeTab === "services" ? "primary-color" : "text-secondary"
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
            >
              Services
            </div>
            <div
              className={`py-3 me-5 cursor-pointer ${
                activeTab === "reviews" ? "primary-color" : "text-secondary"
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
            >
              Reviews
            </div>
            <div
              className={`py-3 me-5 cursor-pointer ${
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
            >
              About
            </div>
            <div
              className={`py-3 me-5 cursor-pointer ${
                activeTab === "gallery" ? "primary-color" : "text-secondary"
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
            >
              Gallery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
