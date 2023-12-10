import React from "react";
import Pagination from "@mui/material/Pagination";

import ServiceCard from "../components/ServiceCard";
import Filter from "../components/Filter";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import profile from "../assets/profile.jpg";

export default function ServiceList() {
  const services = [
    {
      img: service1,
      serviceName: "Car Washing Service",
      stars: 5.0,
      totalReviews: 20,
      includes: ["Car Wash", "Car Care", "Cleaning"],
      providerName: "Jashon Alex",
      providerImg: profile,
      providerAddress: "New York, US",
      price: "25.00",
    },
    {
      img: service2,
      serviceName: "Home Cleaning",
      stars: 4.5,
      totalReviews: 20,
      includes: ["Car Wash", "Car Care", "Cleaning"],
      providerName: "Jashon Alex",
      providerImg: profile,
      providerAddress: "New York, US",
      price: "25.00",
    },
    {
      img: service3,
      serviceName: "Appliance Repairer",
      stars: 5.0,
      totalReviews: 20,
      includes: ["Car Wash", "Car Care", "Cleaning"],
      providerName: "Jashon Alex",
      providerImg: profile,
      providerAddress: "New York, US",
      price: "25.00",
    },
    {
      img: service1,
      serviceName: "Car Washing Service",
      stars: 3.0,
      totalReviews: 20,
      includes: ["Car Wash", "Car Care", "Cleaning"],
      providerName: "Jashon Alex",
      providerImg: profile,
      providerAddress: "New York, US",
      price: "25.00",
    },
    {
      img: service2,
      serviceName: "Home Cleaning",
      stars: 5.0,
      totalReviews: 20,
      includes: ["Car Wash", "Car Care", "Cleaning"],
      providerName: "Jashon Alex",
      providerImg: profile,
      providerAddress: "New York, US",
      price: "25.00",
    },
    {
      img: service3,
      serviceName: "Appliance Repairer",
      stars: 5.0,
      totalReviews: 20,
      includes: ["Car Wash", "Car Care", "Cleaning"],
      providerName: "Jashon Alex",
      providerImg: profile,
      providerAddress: "New York, US",
      price: "25.00",
    },
    {
      img: service1,
      serviceName: "Car Washing Service",
      stars: 5.0,
      totalReviews: 20,
      includes: ["Car Wash", "Car Care", "Cleaning"],
      providerName: "Jashon Alex",
      providerImg: profile,
      providerAddress: "New York, US",
      price: "25.00",
    },
    {
      img: service2,
      serviceName: "Home Cleaning",
      stars: 5.0,
      totalReviews: 20,
      includes: ["Car Wash", "Car Care", "Cleaning"],
      providerName: "Jashon Alex",
      providerImg: profile,
      providerAddress: "New York, US",
      price: "25.00",
    },
    {
      img: service3,
      serviceName: "Appliance Repairer",
      stars: 5.0,
      totalReviews: 20,
      includes: ["Car Wash", "Car Care", "Cleaning"],
      providerName: "Jashon Alex",
      providerImg: profile,
      providerAddress: "New York, US",
      price: "25.00",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div style={{ backgroundColor: "#000" }}>
        <div className="container py-5">
          <h2 style={{ fontWeight: "600", color: "white" }}>Service List</h2>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-3 mb-4">
            <Filter />
          </div>
          <div className="col-12 col-lg-9 mb-4">
            <div className="providers row">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Pagination
                count={5}
                //page={1}
                //onChange={(event, page) => displayPage(page)}
                className="custom-pagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
