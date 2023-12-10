import React from "react";
import Pagination from "@mui/material/Pagination";

import JobCard from "../components/JobCard";
import Filter from "../components/Filter";

import job1 from "../assets/job1.png";
import job2 from "../assets/job2.png";
import job3 from "../assets/job3.png";

export default function JobList() {
  const jobs = [
    {
      img: job1,
      title: "Home repairer to repair doors and windows of 2 rooms",
      recruiter: "Aryan Hassan",
      address: "New York, USA",
      price: [10, 25],
      projectType: "Per Hour",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas id porro, beatae sequi nisi repellendus adipisci tempore labore, nulla animi sapiente, repellat aspernatur ipsam dolorem cum debitis delectus et.",
      skills: ["Home Repair", "Door Repair", "Window Repair"],
      timestamp: "12hr ago",
    },
    {
      img: job2,
      title: "Handy Man for floor installation and plumbing",
      recruiter: "Wonder8 Inc.",
      address: "New York, USA",
      price: [40, 50],
      projectType: "Per Hour",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas id porro, beatae sequi nisi repellendus adipisci tempore labore, nulla animi sapiente, repellat aspernatur ipsam dolorem cum debitis delectus et.",
      skills: ["Floor Installation", "Plumbing", "Repair"],
      timestamp: "12hr ago",
    },
    {
      img: job3,
      title: "Need a home cleaner for full time",
      recruiter: "Soloman Lane",
      address: "New York, USA",
      price: [200, 350],
      projectType: "Average",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas id porro, beatae sequi nisi repellendus adipisci tempore labore, nulla animi sapiente, repellat aspernatur ipsam dolorem cum debitis delectus et.",
      skills: ["Home Cleaning", "Floor Cleaning", "Car Washing"],
      timestamp: "12hr ago",
    },
    {
      img: job1,
      title: "Home repairer to repair doors and windows of 2 rooms",
      recruiter: "Aryan Hassan",
      address: "New York, USA",
      price: [10, 25],
      projectType: "Per Hour",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas id porro, beatae sequi nisi repellendus adipisci tempore labore, nulla animi sapiente, repellat aspernatur ipsam dolorem cum debitis delectus et.",
      skills: ["Home Repair", "Door Repair", "Window Repair"],
      timestamp: "12hr ago",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div style={{ backgroundColor: "#000" }}>
        <div className="container py-5">
          <h2 style={{ fontWeight: "600", color: "white" }}>Find Job</h2>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-3 mb-4">
            <Filter />
          </div>
          <div className="col-12 col-lg-9 mb-4">
            <div className="providers row">
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Pagination
                count={5}
                //page={1}
                //onChange={(event, page) => displayPage(page)}
                className="custom-pagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
