import React from "react";
import { useLocation, Link } from "react-router-dom";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function JobDetails() {
  const location = useLocation();
  const { job } = location.state;

  return (
    <div>
      <div style={{ backgroundColor: "#000", color: "white" }}>
        <div className="container py-5">
          <h1 style={{ fontWeight: "600" }}>{job.title}</h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="d-flex align-items-center mb-5">
          <img
            src={job.img}
            alt="job-img"
            style={{ width: "52px", height: "52px", borderRadius: "10px" }}
            className="me-3"
          />
          <div style={{ fontSize: "18px", fontWeight: "600" }}>
            {job.recruiter}
          </div>
        </div>
        <div className="d-flex mb-5">
          <div className="d-flex me-5">
            <div
              className="d-flex justify-content-center align-items-center me-3"
              style={{
                backgroundColor: "rgba(250, 250, 250, 1)",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <MonetizationOnOutlinedIcon
                style={{ color: "rgba(106, 109, 113, 1)" }}
              />
            </div>
            <div>
              <div
                style={{ fontWeight: "600", color: "rgba(106, 109, 113, 1)" }}
              >
                ${job.price[0]} - ${job.price[1]}
              </div>
              <div className="text-secondary" style={{ fontSize: "12px" }}>
                {job.jobType}
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center me-5">
            <div
              className="d-flex justify-content-center align-items-center me-3"
              style={{
                backgroundColor: "rgba(250, 250, 250, 1)",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <FmdGoodOutlinedIcon
                style={{ color: "rgba(106, 109, 113, 1)" }}
              />
            </div>
            <div className="text-secondary">{job.address}</div>
          </div>
          <div className="d-flex align-items-center me-5">
            <div
              className="d-flex justify-content-center align-items-center me-3"
              style={{
                backgroundColor: "rgba(250, 250, 250, 1)",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <CalendarMonthOutlinedIcon
                style={{ color: "rgba(106, 109, 113, 1)" }}
              />
            </div>
            <div className="text-secondary">{job.date}</div>
          </div>
        </div>
        <Link
          to="/apply-for-job"
          className="primaryButton d-inline-block px-5 mb-5 text-decoration-none"
        >
          Apply
        </Link>
        <div className="text-secondary mb-3" style={{ fontSize: "18px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque
          illum maxime exercitationem officiis accusamus explicabo nisi, ex quis
          a eaque alias quo! Quia quisquam illo modi alias deleniti temporibus.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque
          illum maxime exercitationem officiis accusamus explicabo nisi.
        </div>
        <div className="text-secondary mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          debitis, distinctio non eligendi aliquid esse ipsam veniam dignissimos
          ducimus sequi, necessitatibus maiores repellendus voluptatum! Amet
          quidem autem officia dolorem et?
        </div>
        <div className="mb-3" style={{ fontSize: "18px", fontWeight: "500" }}>
          Requirements:
        </div>
        <ul className="text-secondary mb-5">
          <li className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            accusamus corrupti cupiditate earum! Quo, vero! Illo nostrum. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit.
          </li>
          <li className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            accusamus corrupti cupiditate earum! Quo, vero! Illo nostrum.
          </li>
          <li className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            accusamus corrupti cupiditate.
          </li>
          <li className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            accusamus corrupti cupiditate earum! Quo, vero! Illo nostrum earum!
            Quo, vero! Illo nostrum.
          </li>
        </ul>
        <div className="mb-3" style={{ fontSize: "18px", fontWeight: "500" }}>
          Working Skills
        </div>
        <div className="d-flex flex-wrap">
          {job.skills.map((skill) => (
            <div
              className="py-1 px-2 me-2 mb-2"
              style={{
                border: "1px solid lightgrey",
                borderRadius: "100px",
                fontSize: "14px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
