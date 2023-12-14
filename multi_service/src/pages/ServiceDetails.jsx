import React from "react";
import { useLocation } from "react-router-dom";

export default function ServiceDetails() {
  const location = useLocation();
  const { service } = location.state;

  return (
    <div>
      <div style={{ backgroundColor: "#000" }}>
        <div className="container py-5">
          <h2 style={{ fontWeight: "600", color: "white" }}>
            {service.serviceName}
          </h2>
        </div>
      </div>
    </div>
  );
}
