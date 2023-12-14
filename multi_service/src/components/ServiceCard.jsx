import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function ServiceCard({ service }) {
  return (
    <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
      <div className="card shadow border-0" style={{ borderRadius: "10px" }}>
        <img
          src={service.img}
          alt="service-img"
          className="cursor-pointer"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
        <div className="p-3 pt-2">
          <h5 className="mb-2 cursor-pointer">{service.serviceName}</h5>
          <div className="d-flex mb-3">
            <Rating
              value={service.stars}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              size="small"
              className="me-2"
            />
            <div style={{ fontSize: "12px", color: "#8A919C" }}>
              ({service.totalReviews})
            </div>
          </div>
          <div className="d-flex mb-3">
            {service.includes.map((include, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid lightgrey",
                  borderRadius: "100px",
                  fontSize: "12px",
                }}
                className="text-secondary me-2 px-2 py-1"
              >
                {include}
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex">
              <img
                src={service.providerImg}
                alt="provider-img"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                className="me-3"
              />
              <div className="d-flex flex-column">
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {service.providerName}
                </div>
                <div className="text-secondary" style={{ fontSize: "12px" }}>
                  {service.providerAddress}
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "rgba(62, 183, 103, 1)",
              }}
            >
              ${service.price}
            </div>
          </div>
          <div className="primaryButtonOutline w-100 py-1 mb-2">
            <CalendarMonthIcon
              className="me-1 hide-icon"
              style={{ width: "18px", height: "18px", fontSize: "14px" }}
            />
            Make An Appointment
          </div>
        </div>
      </div>
    </div>
  );
}
