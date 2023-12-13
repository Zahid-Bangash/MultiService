import React, { useState } from "react";

export default function Step2({ onBack, onNext }) {
  const [stepData, setStepData] = useState({ description: "", skills: [] });

  const changeData = (e) => {
    const { name, value } = e.target;
    setStepData({ ...stepData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleNext}>
      <div
        className="shadow p-4 mb-5"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <div className="mb-4">
          <label
            htmlFor="description"
            className="form-label"
            style={{ fontWeight: "500" }}
          >
            Service Description
          </label>
          <textarea
            placeholder="Type Here..."
            className="form-control"
            rows={10}
            id="description"
            name="description"
            value={stepData.description}
            onChange={changeData}
            required
          />
        </div>
        <label className="form-label" style={{ fontWeight: "500" }}>
          This Service includes
        </label>
      </div>
      <div className="d-flex justify-content-end">
        <button
          style={{ border: 0 }}
          className="primaryButtonOutline me-3 px-5"
          onClick={onBack}
        >
          Back
        </button>
        <button style={{ border: 0 }} className="primaryButton px-5">
          Next
        </button>
      </div>
    </form>
  );
}
