import React from "react";

export default function AboutProvider() {
  const skills = [
    "Home Repair",
    "Floor Installation",
    "Fence Repair",
    "Appliance Repair",
    "Light Plumbing Work",
    "Painting",
  ];

  return (
    <>
      <div
        className="shadow p-4 mb-4"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <div className="mb-4" style={{ fontSize: "24px", fontWeight: "600" }}>
          Overview
        </div>
        <div className="text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
          quisquam fuga doloremque nihil sint nostrum velit sapiente sequi
          commodi delectus tempora facilis accusantium quam tenetur quo, dolor
          optio hic cupiditate. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Vitae officia laborum rem, perspiciatis, expedita
          eum dolorum quibusdam eius impedit tenetur inventore quos recusandae
          velit quae alias. Quia quo nobis excepturi. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Debitis, sapiente tempora. Aut
          voluptates animi culpa. Officia dolor placeat, animi id eos tempora,
          laborum fugit labore nam esse odio officiis doloribus?
        </div>
      </div>
      <div
        className="shadow p-4"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <div className="mb-4" style={{ fontSize: "24px", fontWeight: "600" }}>
          Working Skills
        </div>
        <div className="d-flex flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-secondary me-3 mb-3 py-2 px-3"
              style={{
                borderRadius: "100px",
                border: "1px solid lightgrey",
                fontSize: "14px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
