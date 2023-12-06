import React from "react";

export default function Filter() {
  return (
    <div
      className="p-3 shadow"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      <h3 className="mb-4">Filter</h3>
      <h6 className="mb-3">Category</h6>
      <input type="search" className="form-control mb-3" placeholder="Search" />
      <div className="mb-5">
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
          <label className="form-check-label text-secondary">Home Repair</label>
        </div>
      </div>
    </div>
  );
}
