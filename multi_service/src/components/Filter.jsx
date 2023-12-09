import React, { useState } from "react";
import Slider from "@mui/material/Slider";

export default function Filter() {
  const [showMore, setShowMore] = useState(false);
  const [price, setPrice] = useState([0, 540]);

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const valuetext = (value: number) => {
    return `$${value}`;
  };

  return (
    <div
      className="p-4 shadow"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      <h3 className="mb-4">Filter</h3>
      <h6 className="mb-3">Category</h6>
      <input type="search" className="form-control mb-3" placeholder="Search" />
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label text-secondary">
          Floor Installation
        </label>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label text-secondary">Gardening</label>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label text-secondary">Home Cleaning</label>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label text-secondary">Home Repair</label>
      </div>
      {showMore && (
        <>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label text-secondary">
              Floor Installation
            </label>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label text-secondary">Gardening</label>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label text-secondary">
              Home Cleaning
            </label>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label text-secondary">
              Home Repair
            </label>
          </div>
        </>
      )}
      {!showMore && (
        <div
          className="primary-color cursor-pointer mb-4"
          style={{ fontSize: "12px", fontWeight: "600" }}
          onClick={() => setShowMore(true)}
        >
          View All
        </div>
      )}
      {showMore && (
        <div
          className="primary-color cursor-pointer mb-4"
          style={{ fontSize: "12px", fontWeight: "600" }}
          onClick={() => setShowMore(false)}
        >
          View Less
        </div>
      )}
      <h6 className="mb-3">Price</h6>
      <Slider
        className="mb-4"
        //getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        //getAriaValueText={valuetext}
        min={0}
        max={540}
      />
      <h6 className="mb-3">Service Type</h6>
      <select className="form-select mb-4">
        <option value="default" disabled>
          Select Type
        </option>
        <option value="1">Home Cleaning</option>
        <option value="2">Plumbing</option>
        <option value="3">Floor Installation</option>
        <option value="4">Car Washing</option>
      </select>
      <div className="primaryButton">Apply</div>
    </div>
  );
}
