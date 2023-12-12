import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function JobCard({ job }) {
  return (
    <div
      className="mb-4 shadow p-3"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      <div className="d-lg-flex justify-content-between mb-3">
        <div className="d-flex">
          <img
            src={job.img}
            alt="job-img"
            style={{ width: "92px", height: "92px", borderRadius: "10px" }}
          />
          <div className="d-flex flex-column justify-content-between ms-3">
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              {job.title}
            </div>
            <div
              className="text-secondary"
              style={{ fontSize: "14px", fontWeight: "400" }}
            >
              {job.recruiter}
            </div>
            <div className="d-flex align-items-center">
              <FmdGoodOutlinedIcon style={{ width: "16px", height: "16px" }} />
              <div
                className="text-secondary ms-1"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                {job.address}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <div
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "rgba(76, 64, 237, 1)",
            }}
          >
            ${job.price[0]}-${job.price[1]}
          </div>
          <div style={{ fontSize: "12px", fontWeight: "400" }}>
            {job.projectType}
          </div>
        </div>
      </div>
      <div
        className="text-secondary mb-3"
        style={{ fontSize: "14px", fontWeight: "400" }}
      >
        {job.description}
      </div>
      <div className="d-flex">
        {job.skills.map((skill) => (
          <div
            className="py-1 px-2 me-2"
            style={{
              border: "1px solid lightgrey",
              borderRadius: "100px",
              fontSize: "14px",
              fontWeight: "400",
              color: "rgba(69, 69, 69, 1)",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
      <div
        className="d-flex justify-content-end text-secondary"
        style={{ fontSize: "12px", fontWeight: "400" }}
      >
        {job.timestamp}
      </div>
    </div>
  );
}
