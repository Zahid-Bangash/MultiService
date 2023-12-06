import React from "react";
import StarIcon from "@mui/icons-material/Star";

export default function Provider({
  img,
  name,
  profession,
  stars,
  totalReviews,
}) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card p-2 shadow border-0">
        <img src={img} alt="provider-img" className="card-img mb-3" />
        <div className="d-flex flex-column align-items-center">
          <h5 className="mb-3">{name}</h5>
          <div
            className="d-flex justify-content-center align-items-center mb-3"
            style={{
              border: "1px solid lightgrey",
              borderRadius: "100px",
              padding: "6px 16px",
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: "400" }}>
              {profession}
            </div>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <StarIcon style={{ width: "16px", height: "16px" }} />
            <div
              style={{ fontSize: "14px", fontWeight: "600" }}
              className="ms-1 me-2"
            >
              {stars}
            </div>
            <div
              style={{ fontSize: "12px", color: "#8A919C", fontWeight: "400" }}
            >
              ({totalReviews})
            </div>
          </div>
          <di className="primaryButtonOutline w-100 py-1 mb-2">View Profile</di>
        </div>
      </div>
    </div>
  );
}
