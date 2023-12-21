import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function ServiceReviewCard({ review }) {
  return (
    <div
      className="shadow p-4 mb-4"
      style={{ borderRadius: "10px", backgroundColor: "white" }}
    >
      <div className="d-flex review-justify align-items-center mb-3">
        <img
          src={review.img}
          alt="user-img"
          style={{ width: "48px", height: "48px", borderRadius: "50%" }}
          className="me-4 review-margin"
        />
        <div className="d-flex flex-column review-justify">
          <div className="d-flex align-items-center review-margin">
            <div
              className="me-3"
              style={{ fontSize: "20px", fontWeight: "600" }}
            >
              {review.name}
            </div>
            <div className="text-secondary" style={{ fontSize: "12px" }}>
              {review.timestamp}
            </div>
          </div>
          <Rating
            value={review.stars}
            readOnly
            precision={1}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
            size="small"
            className="me-2"
          />
        </div>
      </div>
      <div className="text-secondary">{review.description}</div>
    </div>
  );
}
