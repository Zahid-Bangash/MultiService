import React, { useState } from "react";

export default function PlaceBid() {
  const [bidData, setBidData] = useState({
    amount: "",
    timeline: "",
    type: "",
    description: "",
    availableDays: [],
    availableTime: { start: "", end: "" },
  });

  const handleUpdateFields = (e) => {
    const { name, value } = e.target;
    setBidData({ ...bidData, [name]: value });
  };

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div className="container py-5">
        <h1 className="mb-4" style={{ fontWeight: "600" }}>
          Place Bid
        </h1>
        <div
          className="shadow p-4"
          style={{ borderRadius: "20px", backgroundColor: "white" }}
        >
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <label
                htmlFor="amount"
                className="form-label"
                style={{ fontWeight: "500" }}
              >
                Enter Bid Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={bidData.amount}
                onChange={handleUpdateFields}
                required
              />
            </div>
            <div className="col-12 col-md-6 d-flex align-items-end">
              <div className="w-75 me-3">
                <label
                  htmlFor="timeline"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  The work will be done in
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="timeline"
                  name="timeline"
                  value={bidData.timeline}
                  onChange={handleUpdateFields}
                  required
                />
              </div>
              <select
                className="form-select w-25"
                name="type"
                value={bidData.type}
                onChange={handleUpdateFields}
                required
              >
                <option value="hours">Hours</option>
                <option value="days">Days</option>
                <option value="months">Months</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
