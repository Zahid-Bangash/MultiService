import React from "react";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Done from "@mui/icons-material/Done";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

import job1 from "../assets/job1.png";
import job2 from "../assets/job2.png";
import job3 from "../assets/job3.png";

export default function ServiceDetails() {
  const location = useLocation();
  const { service } = location.state;

  const images = [job1, job2, job3];

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
          <div className="col-12 col-lg-8 mb-4 mb-lg-0">
            <div
              id="carouselExample"
              className="carousel slide"
              style={{ borderRadius: "10px" }}
            >
              <div className="carousel-inner" style={{ borderRadius: "10px" }}>
                {images.map((img, index) => (
                  <div key={index} className="carousel-item active">
                    <img
                      src={img}
                      className="d-block w-100"
                      alt="service-img"
                      style={{ height: "446px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="shadow p-4 mb-3" style={{ borderRadius: "10px" }}>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "rgba(76, 64, 237, 1)",
                }}
              >
                ${service.price}
              </div>
              <div className="text-secondary mb-3" style={{ fontSize: "10px" }}>
                {service.jobType}
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
            <div className="shadow mb-4 p-4" style={{ borderRadius: "10px" }}>
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
            <div className="shadow p-4 pt-4" style={{ borderRadius: "10px" }}>
              <div className="d-flex flex-column align-items-center mb-3">
                <img
                  className="mb-3"
                  src={service.providerImg}
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
                  {service.providerName}
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
                    {service.stars.toFixed(1)}
                  </div>
                  <div className="text-secondary" style={{ fontSize: "14px" }}>
                    ({service.totalReviews})
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center text-secondary">
                  <FmdGoodOutlinedIcon className="me-2" />
                  {service.providerAddress}
                </div>
                <div className="d-flex align-items-center text-secondary">
                  <ChatBubbleOutlineRoundedIcon className="me-2" />
                  English, Spanish
                </div>
              </div>
              <div className="text-secondary mb-4" style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat nostrum nulla facere quod adipisci voluptas, dolorem,
                fugit sequi laudantium illo quas provident nihil consequuntur
                quo tenetur illum culpa quidem a.
              </div>
              <div className="mb-3" style={{ fontWeight: "500" }}>
                Skills
              </div>
              <div className="d-flex flex-wrap">
                {service.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="mb-2 me-2 py-1 px-3"
                    style={{
                      fontSize: "12px",
                      border: "1px solid lightgrey",
                      borderRadius: "100px",
                      color: "rgba(69, 69, 69, 1)",
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
