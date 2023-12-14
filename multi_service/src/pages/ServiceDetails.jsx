import React from "react";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

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
      <div className="container py-5"></div>
    </div>
  );
}
