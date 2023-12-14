import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Step3({ onBack }) {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const newImages = Array.from(selectedFiles).map((file) => ({
      file,
      uri: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
    document.getElementById("imageInput").value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (images.length === 8) {
      return;
    }
    const droppedFiles = event.dataTransfer.files;
    const newImages = Array.from(droppedFiles).map((file) => ({
      file,
      uri: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
    document.getElementById("imageInput").value = "";
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div>
      <div
        className="shadow p-4 mb-4"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <div className="mb-3" style={{ fontSize: "18", fontWeight: "500" }}>
          Upload Images
        </div>
        <div className="row" onDrop={handleDrop} onDragOver={preventDefault}>
          <div className="col-12 col-lg-6 mb-3 mb-lg-0 d-flex justify-content-center align-items-center py-5 my-5">
            {images.length === 8 ? (
              <h6>The maximum image limit has been reached.</h6>
            ) : (
              <div className="d-flex flex-column align-items-center">
                <PhotoSizeSelectActualIcon
                  className="mb-3"
                  style={{ width: "40px", height: "40px", color: "grey" }}
                />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="imageInput"
                />
                <div className="mb-2">
                  Drag & Drop Files or{" "}
                  <span
                    className="cursor-pointer primary-color"
                    onClick={() =>
                      document.getElementById("imageInput").click()
                    }
                  >
                    Browse
                  </span>
                </div>
                <div
                  className="text-secondary mb-2"
                  style={{ fontSize: "10px" }}
                >
                  Supported Formates: PNG, GIF, JPEG, JPG
                </div>
                <div className="text-secondary" style={{ fontSize: "10px" }}>
                  Maximum Size: 35 MB
                </div>
              </div>
            )}
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center">
                {images.map((image, index) => (
                  <div key={index} className="position-relative me-3 mb-3">
                    <img
                      src={image.uri}
                      alt={`service-img-${index + 1}`}
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "5px",
                      }}
                    />
                    <CancelIcon
                      style={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        color: "rgba(0, 0, 0, .5)",
                      }}
                      className="cursor-pointer"
                      onClick={() => handleRemoveImage(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
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
        <button style={{ border: 0 }} className="primaryButton px-5">
          Finish
          <CheckCircleIcon className="ms-2" />
        </button>
      </div>
    </div>
  );
}
