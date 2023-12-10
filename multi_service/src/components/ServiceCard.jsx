import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function ServiceCard({ service }) {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-4">
      <div className="card shadow border-0" style={{ borderRadius: "10px" }}>
        <img
          src={service.img}
          alt="service-img"
          className="cursor-pointer"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
        <div className="p-3">
          <h5 className="mb-2 cursor-pointer">{service.serviceName}</h5>
          <div className="d-flex">
            <Rating
              name="text-feedback"
              value={service.stars}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
