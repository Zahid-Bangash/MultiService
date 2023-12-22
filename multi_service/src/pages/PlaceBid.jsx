import React, { useState } from "react";

export default function PlaceBid() {
  const [bidData, setBidData] = useState({
    amount: "",
    timeline: "",
    type: "",
    description: "",
    availableDays: [],
    availableTime: { from: "", till: "" },
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
          className="shadow p-4 mb-4"
          style={{ borderRadius: "20px", backgroundColor: "white" }}
        >
          <div className="row mb-4">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
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
            <div className="col-12 col-lg-6 d-sm-flex align-items-end">
              <div className="me-0 me-sm-3 mb-3 mb-sm-0 bid-timeline">
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
                className="form-select bid-timeline-type"
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
          <div className="mb-4">
            <label
              htmlFor="description"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              The work will be done in
            </label>
            <textarea
              className="form-control"
              placeholder="Type Here..."
              rows={8}
              id="description"
              name="description"
              value={bidData.description}
              onChange={handleUpdateFields}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Select Available Day
            </label>
            <div
              className="text-secondary p-3"
              style={{ border: "1px solid lightgrey", borderRadius: "10px" }}
            >
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-sm-0">
                  <div className="d-flex mb-3">
                    <input
                      type="checkbox"
                      className="custom-checkbox me-2 cursor-pointer"
                      id="sunday"
                    />
                    <label
                      className="form-check-label text-secondary cursor-pointer"
                      htmlFor="sunday"
                    >
                      Sunday
                    </label>
                  </div>
                  <div className="d-flex mb-3">
                    <input
                      type="checkbox"
                      className="custom-checkbox me-2 cursor-pointer"
                      id="Monday"
                    />
                    <label
                      className="form-check-label text-secondary cursor-pointer"
                      htmlFor="Monday"
                    >
                      Monday
                    </label>
                  </div>
                  <div className="d-flex mb-3">
                    <input
                      type="checkbox"
                      className="custom-checkbox me-2 cursor-pointer"
                      id="Tuesday"
                    />
                    <label
                      className="form-check-label text-secondary cursor-pointer"
                      htmlFor="Tuesday"
                    >
                      Tuesday
                    </label>
                  </div>
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      className="custom-checkbox me-2 cursor-pointer"
                      id="Wednesday"
                    />
                    <label
                      className="form-check-label text-secondary cursor-pointer"
                      htmlFor="Wednesday"
                    >
                      Wednesday
                    </label>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="d-flex mb-3">
                    <input
                      type="checkbox"
                      className="custom-checkbox me-2 cursor-pointer"
                      id="Thursday"
                    />
                    <label
                      className="form-check-label text-secondary cursor-pointer"
                      htmlFor="Thursday"
                    >
                      Thursday
                    </label>
                  </div>
                  <div className="d-flex mb-3">
                    <input
                      type="checkbox"
                      className="custom-checkbox me-2 cursor-pointer"
                      id="Friday"
                    />
                    <label
                      className="form-check-label text-secondary cursor-pointer"
                      htmlFor="Friday"
                    >
                      Friday
                    </label>
                  </div>
                  <div className="d-flex mb-3">
                    <input
                      type="checkbox"
                      className="custom-checkbox me-2 cursor-pointer"
                      id="Saturday"
                    />
                    <label
                      className="form-check-label text-secondary cursor-pointer"
                      htmlFor="Saturday"
                    >
                      Saturday
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <label className="form-label" style={{ fontWeight: "500" }}>
              Select Available Time
            </label>
            <div className="col-12 col-sm-6 mb-4 mb-sm-0">
              <select
                className="form-select"
                name=""
                value={bidData.availableTime.from}
                onChange={handleUpdateFields}
                required
              >
                <option value="" disabled>
                  --From--
                </option>
                <option value="12AM">From 12AM</option>
                <option value="1AM">From 1AM</option>
                <option value="2AM">From 2AM</option>
                <option value="3AM">From 3AM</option>
                <option value="4AM">From 4AM</option>
                <option value="5AM">From 5AM</option>
                <option value="6AM">From 6AM</option>
                <option value="7AM">From 7AM</option>
                <option value="8AM">From 8AM</option>
                <option value="9AM">From 9AM</option>
                <option value="10AM">From 10AM</option>
                <option value="11AM">From 11AM</option>
                <option value="12PM">From 12PM</option>
                <option value="1PM">From 1PM</option>
                <option value="2PM">From 2PM</option>
                <option value="3PM">From 3PM</option>
                <option value="4PM">From 4PM</option>
                <option value="5PM">From 5PM</option>
                <option value="6PM">From 6PM</option>
                <option value="7PM">From 7PM</option>
                <option value="8PM">From 8PM</option>
                <option value="9PM">From 9PM</option>
                <option value="10PM">From 10PM</option>
                <option value="11PM">From 11PM</option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <select
                className="form-select"
                name=""
                value={bidData.availableTime.till}
                onChange={handleUpdateFields}
                required
              >
                <option value="" disabled>
                  --Till--
                </option>
                <option value="12AM">Till 12AM</option>
                <option value="1AM">Till 1AM</option>
                <option value="2AM">Till 2AM</option>
                <option value="3AM">Till 3AM</option>
                <option value="4AM">Till 4AM</option>
                <option value="5AM">Till 5AM</option>
                <option value="6AM">Till 6AM</option>
                <option value="7AM">Till 7AM</option>
                <option value="8AM">Till 8AM</option>
                <option value="9AM">Till 9AM</option>
                <option value="10AM">Till 10AM</option>
                <option value="11AM">Till 11AM</option>
                <option value="12PM">Till 12PM</option>
                <option value="1PM">Till 1PM</option>
                <option value="2PM">Till 2PM</option>
                <option value="3PM">Till 3PM</option>
                <option value="4PM">Till 4PM</option>
                <option value="5PM">Till 5PM</option>
                <option value="6PM">Till 6PM</option>
                <option value="7PM">Till 7PM</option>
                <option value="8PM">Till 8PM</option>
                <option value="9PM">Till 9PM</option>
                <option value="10PM">Till 10PM</option>
                <option value="11PM">Till 11PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="primaryButton d-inline-block px-4">Place Bid</div>
      </div>
    </div>
  );
}
