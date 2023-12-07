import React, { useState } from "react";

export default function Filter() {
  const [showMore, setShowMore] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(540);

  return (
    <div
      className="p-3 shadow"
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
          className="primary-color cursor-pointer mb-3"
          style={{ fontSize: "12px", fontWeight: "600" }}
          onClick={() => setShowMore(true)}
        >
          View All
        </div>
      )}
      {showMore && (
        <div
          className="primary-color cursor-pointer mb-3"
          style={{ fontSize: "12px", fontWeight: "600" }}
          onClick={() => setShowMore(false)}
        >
          View Less
        </div>
      )}
      <h6 className="mb-3">Price</h6>
      <div className="d-flex justify-content-between mb-2">
        <div
          className="primary-color"
          style={{
            fontWeight: "400",
            backgroundColor: "rgba(76, 64, 237, 0.1)",
            padding: "3px 8px",
            borderRadius: "4px",
          }}
        >
          $0
        </div>
        <div
          className="primary-color"
          style={{
            fontWeight: "400",
            backgroundColor: "rgba(76, 64, 237, 0.1)",
            padding: "3px 8px",
            borderRadius: "4px",
          }}
        >
          $540
        </div>
      </div>
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        step="1"
        className="form-range"
      />
    </div>
  );
}
