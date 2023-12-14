import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";

export default function Step3({ onBack }) {
  return (
    <div>
      <div
        className="shadow p-4 mb-4"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <div className="mb-3" style={{ fontSize: "18", fontWeight: "500" }}>
          Upload Images
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-3 mb-lg-0 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center">
              <PhotoSizeSelectActualIcon
                className="mb-3"
                style={{ width: "40px", height: "40px", color: "grey" }}
              />
              <div className="mb-2">Drag & Drop Files or Browse</div>
              <div className="text-secondary" style={{ fontSize: "10px" }}>
                Supported formates: PNG, GIF, JPEG, JPG
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6"></div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="primaryButtonOutline me-3 px-5" onClick={onBack}>
          <ArrowBackIcon className="me-2" />
          Back
        </button>
        <button style={{ border: 0 }} className="primaryButton px-5">
          Finish
          <CheckCircleIcon className="ms-2" />
        </button>
      </div>
    </div>
  );
}
