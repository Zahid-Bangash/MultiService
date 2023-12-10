import React, { useState } from "react";
import Slider from "@mui/material/Slider";

export default function Filter() {
  const [showMore, setShowMore] = useState(false);
  const [price, setPrice] = useState([0, 540]);
  const [serviceType, setServiceType] = useState("default");

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const valuetext = (value: number) => {
    return `$${value}`;
  };

  return (
    <>
      <h5
        className="d-lg-none d-inline-block"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
      >
        <i className="fa fa-filter primary-color"></i> Filter
      </h5>
      <div
        className="offcanvas-lg offcanvas-start"
        tabIndex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div
            className="p-4 filter-shadow"
            style={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <h3 className="mb-4">Filter</h3>
            <h6 className="mb-3">Category</h6>
            <input
              type="search"
              className="form-control mb-3"
              placeholder="Search"
            />
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label text-secondary">
                Floor Installation
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label text-secondary">
                Gardening
              </label>
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
                  <label className="form-check-label text-secondary">
                    Gardening
                  </label>
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
                className="primary-color cursor-pointer mb-4 d-inline-block"
                style={{ fontSize: "12px", fontWeight: "600" }}
                onClick={() => setShowMore(true)}
              >
                View All
              </div>
            )}
            {showMore && (
              <div
                className="primary-color cursor-pointer mb-4 d-inline-block"
                style={{ fontSize: "12px", fontWeight: "600" }}
                onClick={() => setShowMore(false)}
              >
                View Less
              </div>
            )}
            <h6 className="mb-3">Price</h6>
            <Slider
              className="mb-4"
              getAriaLabel={() => "Price range"}
              value={price}
              onChange={handleChange}
              valueLabelDisplay="auto"
              valueLabelFormat={valuetext}
              min={0}
              max={540}
              style={{ color: "#4c40ed" }}
            />
            <h6 className="mb-3">Service Type</h6>
            <select
              className="form-select mb-4"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="default" disabled>
                Select Type
              </option>
              <option value="1">Home Cleaning</option>
              <option value="2">Plumbing</option>
              <option value="3">Floor Installation</option>
              <option value="4">Car Washing</option>
            </select>
            <div
              className="primaryButton"
              data-bs-target="#offcanvasResponsive"
              data-bs-dismiss="offcanvas"
            >
              Apply
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
