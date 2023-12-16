import React from "react";
import Pagination from "@mui/material/Pagination";

import ServiceReviewCard from "./ServiceReviewCard";

import profile from "../assets/profile.jpg";
import profile1 from "../assets/profile1.jpg";

export default function ServiceReviews() {
  const reviews = [
    {
      img: profile,
      name: "Zahid Bangash",
      stars: 5.0,
      timestamp: "2 days ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis saepe corporis magni modi cum reiciendis nobis laborum commodi quia cupiditate temporibus debitis nostrum hic earum, quam esse dolor, fugiat ea!",
    },
    {
      img: profile1,
      name: "Muhammad Zahid",
      stars: 4.0,
      timestamp: "3 days ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis saepe corporis magni modi cum reiciendis nobis laborum commodi quia cupiditate temporibus debitis nostrum hic earum, quam esse dolor, fugiat ea!",
    },
    {
      img: profile,
      name: "Zahid Bangash",
      stars: 3.0,
      timestamp: "4 days ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis saepe corporis magni modi cum reiciendis nobis laborum commodi quia cupiditate temporibus debitis nostrum hic earum, quam esse dolor, fugiat ea!",
    },
    {
      img: profile1,
      name: "Muhammad Zahid",
      stars: 2.0,
      timestamp: "7 days ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis saepe corporis magni modi cum reiciendis nobis laborum commodi quia cupiditate temporibus debitis nostrum hic earum, quam esse dolor, fugiat ea!",
    },
  ];

  return (
    <div className="py-5">
      <div className="mb-5" style={{ fontSize: "20px", fontWeight: "600" }}>
        Reviews
      </div>
      {reviews.map((review, index) => (
        <ServiceReviewCard key={index} review={review} />
      ))}
      <div className="d-flex justify-content-center mt-4">
        <Pagination
          count={5}
          //page={1}
          //onChange={(event, page) => displayPage(page)}
          className="custom-pagination"
        />
      </div>
    </div>
  );
}
