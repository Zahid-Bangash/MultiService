import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { Context } from "../components/ContextProvider";

import JobCard from "../components/JobCard";
import Filter from "../components/Filter";

export default function JobList() {
  const { jobs } = useContext(Context);

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
                <Link
                  key={index}
                  to={`/jobs/${job.title.replace(/\s+/g, "-")}`}
                  state={{ job }}
                  className="text-decoration-none text-dark"
                >
                  <JobCard job={job} />
                </Link>
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
