import React from "react";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import DoneIcon from "@mui/icons-material/Done";
import Done from "@mui/icons-material/Done";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import profile from "../assets/profile.jpg";

export default function ServiceDetails() {
  const location = useLocation();
  const { service } = location.state;

  return (
    <div>
      <div style={{ backgroundColor: "#000", color: "white" }}>
        <div className="container py-5">
          <h1 className="mb-4" style={{ fontWeight: "600" }}>
            {service.serviceName}
          </h1>
          <div className="d-flex align-items-center">
            <img
              className="me-3"
              src={service.providerImg}
              alt="service-provider-img"
              style={{ width: "48px", height: "48px", borderRadius: "50%" }}
            />
            <div className="d-sm-flex">
              <div className="d-flex align-items-center mb-3 mb-sm-0 me-0 me-sm-5">
                <div className="me-3" style={{ fontWeight: "600" }}>
                  {service.providerName}
                </div>
                <StarIcon
                  className="me-1"
                  style={{ width: "18px", height: "18px" }}
                />
                <div
                  className="me-1"
                  style={{ fontWeight: "600", fontSize: "14px" }}
                >
                  {service.stars.toFixed(1)}
                </div>
                <div style={{ fontSize: "14px" }}>({service.totalReviews})</div>
              </div>
              <div className="d-flex align-items-center">
                <FmdGoodOutlinedIcon className="me-1" />
                <div>{service.providerAddress}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-8 bg-dark">1</div>
          <div className="col-12 col-md-4">
            <div className="shadow p-3 mb-3" style={{ borderRadius: "10px" }}>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "rgba(76, 64, 237, 1)",
                }}
              >
                $25.00
              </div>
              <div className="text-secondary mb-3" style={{ fontSize: "10px" }}>
                Per Hour
              </div>
              <div className="text-secondary mb-4" style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nesciunt esse praesentium vitae voluptatr.
              </div>
              <div className="mb-2 d-flex">
                <Done className="me-2" />
                Deep Cleaning
              </div>
              <div className="mb-2 d-flex">
                <Done className="me-2" />
                Window Cleaning
              </div>
              <div className="mb-2 d-flex">
                <Done className="me-2" />
                Carpet Cleaning
              </div>
              <div className="mb-2 d-flex">
                <Done className="me-2" />
                Kitchen Cleaning
              </div>
              <div className="mb-2 d-flex">
                <Done className="me-2" />
                Bathroom Cleaning
              </div>
              <div className="mb-2 d-flex">
                <Done className="me-2" />
                Organizing
              </div>
            </div>
            <div className="primaryButton mb-4">
              <CalendarMonthIcon className="me-2" />
              Make An Appointment
            </div>
            <div className="shadow mb-4 p-3" style={{ borderRadius: "10px" }}>
              <div
                className="mb-4"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                Service Availability
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  Sunday:
                </div>
                <div className="text-secondary" style={{ fontSize: "14px" }}>
                  Closed
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  Monday:
                </div>
                <div className="text-secondary" style={{ fontSize: "14px" }}>
                  10am to 6pm
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  Tuesday:
                </div>
                <div className="text-secondary" style={{ fontSize: "14px" }}>
                  10am to 6pm
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  Wednesday:
                </div>
                <div className="text-secondary" style={{ fontSize: "14px" }}>
                  10am to 6pm
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  Thursday:
                </div>
                <div className="text-secondary" style={{ fontSize: "14px" }}>
                  10am to 6pm
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  Saturday:
                </div>
                <div className="text-secondary" style={{ fontSize: "14px" }}>
                  7am to 2pm
                </div>
              </div>
            </div>
            <div className="shadow p-3 pt-4" style={{ borderRadius: "10px" }}>
              <div className="d-flex flex-column align-items-center">
                <img
                  className="mb-3"
                  src={profile}
                  alt="service-provider-img"
                  style={{
                    width: "140px",
                    height: "140p",
                    borderRadius: "50%",
                  }}
                />
                <div
                  className="mb-2"
                  style={{ fontSize: "20px", fontWeight: "600" }}
                >
                  Zahid Bangash
                </div>
                <div
                  className="mb-3 py-1 px-3"
                  style={{
                    fontSize: "12px",
                    border: "1px solid lightgrey",
                    borderRadius: "100px",
                    color: "rgba(69, 69, 69, 1)",
                  }}
                >
                  Home Cleaner
                </div>
                <div className="d-flex align-items-center">
                  <StarIcon style={{ width: "21px", height: "21px" }} />
                  <div className="mx-1" style={{ fontWeight: "600" }}>
                    5.0
                  </div>
                  <div className="text-secondary" style={{ fontSize: "14px" }}>
                    (20)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
