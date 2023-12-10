import React from "react";
import Pagination from "@mui/material/Pagination";

import Provider from "../components/Provider";
import Filter from "../components/Filter";

import provider1 from "../assets/provider1.png";
import provider2 from "../assets/provider2.png";
import provider3 from "../assets/provider3.png";

export default function ProvidersList() {
  const providers = [
    {
      img: provider1,
      name: "Marks Philips",
      profession: "Electrician",
      stars: "5.0",
      totalReviews: 20,
    },
    {
      img: provider2,
      name: "Balqees Ahmad Fathi",
      profession: "Home Cleaner",
      stars: "5.0",
      totalReviews: 20,
    },
    {
      img: provider3,
      name: "Hussain Al Jasmi",
      profession: "Electrician",
      stars: "5.0",
      totalReviews: 20,
    },
    {
      img: provider1,
      name: "Marks Philips",
      profession: "Electrician",
      stars: "5.0",
      totalReviews: 20,
    },
    {
      img: provider2,
      name: "Balqees Ahmad Fathi",
      profession: "Home Cleaner",
      stars: "5.0",
      totalReviews: 20,
    },
    {
      img: provider1,
      name: "Hussain Al Jasmi",
      profession: "Electrician",
      stars: "5.0",
      totalReviews: 20,
    },
    {
      img: provider1,
      name: "Marks Philips",
      profession: "Electrician",
      stars: "5.0",
      totalReviews: 20,
    },
    {
      img: provider2,
      name: "Balqees Ahmad Fathi",
      profession: "Home Cleaner",
      stars: "5.0",
      totalReviews: 20,
    },
    {
      img: provider3,
      name: "Hussain Al Jasmi",
      profession: "Electrician",
      stars: "5.0",
      totalReviews: 20,
    },
  ];

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div style={{ backgroundColor: "#000" }}>
        <div className="container py-5">
          <h2 style={{ fontWeight: "600", color: "white" }}>Providers List</h2>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-3 mb-4">
            <Filter />
          </div>
          <div className="col-12 col-lg-9 mb-4">
            <div className="providers row">
              {providers.map((provider, index) => (
                <Provider
                  key={index}
                  img={provider.img}
                  name={provider.name}
                  profession={provider.profession}
                  stars={provider.stars}
                  totalReviews={provider.totalReviews}
                />
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
