import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Step1({ onNext }) {
  const [stepData, setStepData] = useState({
    title: "",
    category: "",
    price: "",
    priceType: "",
  });

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
        className="shadow p-4 mb-4"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <label
              htmlFor="title"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Enter Service Title
            </label>
            <input
              placeholder="Enter Title"
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={stepData.title}
              onChange={changeData}
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label
              htmlFor="category"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Service Category
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
              value={stepData.category}
              onChange={changeData}
              required
            >
              <option value="" disabled>
                --Select Category--
              </option>
              <option value="1">Home Cleaning</option>
              <option value="2">Category1</option>
              <option value="3">category2</option>
              <option value="4">Category3</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <label
              htmlFor="price"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Price
            </label>
            <input
              placeholder="Enter Price"
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={stepData.price}
              onChange={changeData}
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label
              htmlFor="priceType"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Price Type
            </label>
            <select
              className="form-select"
              id="priceType"
              name="priceType"
              value={stepData.priceType}
              onChange={changeData}
              required
            >
              <option value="" disabled>
                --Select Price Type--
              </option>
              <option value="hourly">Hourly</option>
              <option value="average">Average</option>
            </select>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          style={{ border: 0 }}
          className="primaryButton px-5"
        >
          Next
          <ArrowForwardIcon className="ms-2" />
        </button>
      </div>
    </form>
  );
}
