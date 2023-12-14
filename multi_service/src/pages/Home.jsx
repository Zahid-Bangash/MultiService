import React from "react";

export default function Home() {
  return (
    <div className="home-page">
      <div className="hero" style={{ backgroundColor: "#F5F7FC" }}>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <h1
                className="mb-3"
                style={{ fontSize: "59px", fontWeight: "600" }}
              >
                Discover & Book Local Service Providers
              </h1>
              <div className="text-secondary" style={{ fontSize: "20px" }}>
                Search From 100 Awesome Verified Service Providers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h1
          className="text-center"
          style={{ fontWeight: "600", fontSize: "48px" }}
        >
          How It Works
        </h1>
      </div>
    </div>
  );
}
