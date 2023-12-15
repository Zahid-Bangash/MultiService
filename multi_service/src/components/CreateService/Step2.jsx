import React, { useState } from "react";
import { toast } from "react-toastify";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactQuill from "react-quill";

export default function Step2({ onBack, onNext }) {
  const [stepData, setStepData] = useState({ description: "", skills: [] });

  const skills = [
    "Bathroom Cleaning",
    "Green Cleaning",
    "Emergency Cleaninig",
    "Deep Cleaning",
    "Pet-Friendly Cleaning",
    "Customized Cleaning Plans",
    "Window Cleaning",
    "Same-Day Service",
    "Move-In/Move-Out Cleaning",
    "Carpet Cleaning",
    "Kitchen Cleaning",
    "Organizing",
  ];

  const changeData = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedSkills = checked
        ? [...stepData.skills, value]
        : stepData.skills.filter((skill) => skill !== value);

      setStepData({ ...stepData, skills: updatedSkills });
    } else {
      setStepData({ ...stepData, [name]: value });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (stepData.description.trim() === "") {
      toast.warning("Please enter service description.");
      return;
    }
    if (stepData.skills.length < 1) {
      toast.warning("Please check at least one skill.");
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleNext}>
      <div
        className="shadow p-4 mb-4"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <div className="mb-4">
          <label className="form-label" style={{ fontWeight: "500" }}>
            Service Description
          </label>
          <ReactQuill
            placeholder="Type Here..."
            value={stepData.description}
            onChange={(value) =>
              setStepData({ ...stepData, description: value })
            }
          />
        </div>
        <label className="form-label mb-4" style={{ fontWeight: "500" }}>
          This Service includes
        </label>
        <div className="row px-3">
          {skills.map((skill) => (
            <div key={skill} className="col-12 col-sm-6 col-lg-4 mb-3">
              <div className="d-flex align-items-center">
                <input
                  className="cursor-pointer custom-checkbox me-3"
                  type="checkbox"
                  id={skill}
                  name="skills"
                  value={skill}
                  checked={stepData.skills.includes(skill)}
                  onChange={changeData}
                />
                <label
                  className="form-check-label text-secondary cursor-pointer"
                  htmlFor={skill}
                >
                  {skill}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="create-service-controls">
        <button
          className="primaryButtonOutline back-button-margin px-5"
          onClick={onBack}
        >
          <ArrowBackIcon className="me-2" />
          Back
        </button>
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
