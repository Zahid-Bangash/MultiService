import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

import banner from "../assets/banner.png";
import profile from "../assets/profile.jpg";

export default function ProvidersProfile() {
  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div className="container py-5">
        <div className="shadow bg-white" style={{ borderRadius: "10px" }}>
          <img
            src={banner}
            alt="banner"
            style={{ width: "100%", borderRadius: "10px 10px 0 0" }}
          />
          <div className="d-flex align-items-end">
            <img
              src={profile}
              alt="profile"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "5px solid white",
              }}
              className="me-4"
            />
            <div>
              <div className="d-flex align-items-center">
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
              <div className="d-flex">
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
              <div className="d-flex" style={{ fontSize: "14px" }}>
                <div className="d-flex align-items-center text-secondary">
                  <FmdGoodOutlinedIcon
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  New York, USA
                </div>
                <div className="d-flex align-items-center text-secondary">
                  <ChatBubbleOutlineRoundedIcon
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  English, Spanish
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
