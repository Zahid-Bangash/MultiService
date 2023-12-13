import React, { useState } from "react";

export default function JobApply() {
  const [data, setData] = useState({ amount: "", description: "" });

  const dataChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount" && parseFloat(value) < 0) {
      return;
    }
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container py-5">
      <h1 className="mb-5" style={{ fontWeight: "600" }}>
        Apply For Job
      </h1>
      <form className="w-md-75" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={data.amount}
            onChange={dataChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            placeholder="Type Here..."
            className="form-control"
            id="description"
            rows={10}
            name="description"
            value={data.description}
            onChange={dataChange}
            required
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="primaryButton" style={{ border: 0 }}>
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
