import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ProviderServices() {
  const services = [
    {
      title: "Home Repair Service",
      price: 25,
      description: "lorem ipsum dolor concit amit.",
    },
    {
      title: "Office Repair Service",
      price: 50,
      description: "lorem ipsum dolor concit amit.",
    },
    {
      title: "Fence Repair Service",
      price: 15,
      description: "lorem ipsum dolor concit amit.",
    },
    {
      title: "Other Repair Service",
      price: 25,
      description: "lorem ipsum dolor concit amit.",
    },
  ];
  return services.map((service, index) => (
    <div
      key={index}
      className="shadow p-4 mb-4 cursor-pointer"
      style={{ borderRadius: "10px", backgroundColor: "white" }}
    >
      <div className="d-sm-flex justify-content-between mb-4">
        <div className="mb-3 mb-sm-0">
          <div className="mb-2" style={{ fontSize: "24px", fontWeight: "600" }}>
            {service.title}
          </div>
          <div className="text-secondary" style={{ fontSize: "14px" }}>
            {service.description}
          </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <div className="mb-2" style={{ fontSize: "22px", fontWeight: "600" }}>
            ${service.price.toFixed(2)}
          </div>
          <div className="text-secondary" style={{ fontSize: "12px" }}>
            Per Hour
          </div>
        </div>
      </div>
      <div
        className="d-flex align-items-center"
        style={{ fontSize: "14px", fontWeight: "600" }}
      >
        More Info
        <ArrowForwardIcon
          className="ms-2"
          style={{ width: "16px", height: "16px" }}
        />
      </div>
    </div>
  ));
}
