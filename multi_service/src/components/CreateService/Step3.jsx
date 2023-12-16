import React, { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CancelIcon from "@mui/icons-material/Cancel";
import { toast } from "react-toastify";
import Cropper from "react-easy-crop";

export default function Step3({ onBack }) {
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setcroppedAreaPixels] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const image = new Image();
    image.src = URL.createObjectURL(selectedFile);
    image.onload = () => {
      const aspectRatio = image.width / image.height;
      if (aspectRatio === 2) {
        setImages((prevImages) => [
          ...prevImages,
          { file: selectedFile, uri: URL.createObjectURL(selectedFile) },
        ]);
      } else {
        setSelectedImg(URL.createObjectURL(selectedFile));
        document.getElementById("openModal").click();
      }
    };
    event.target.value = "";
  };

  const handleSaveImage = () => {
    const tempCanvas = document.createElement("canvas");
    const ctx = tempCanvas.getContext("2d");

    const x = croppedAreaPixels.x;
    const y = croppedAreaPixels.y;
    const width = croppedAreaPixels.width;
    const height = croppedAreaPixels.height;

    tempCanvas.width = width;
    tempCanvas.height = height;

    const img = new Image();
    img.src = selectedImg;
    ctx.drawImage(img, x, y, width, height, 0, 0, width, height);

    const croppedDataURL = tempCanvas.toDataURL("image/jpeg");
    fetch(croppedDataURL)
      .then((res) => res.blob())
      .then((blob) => {
        const croppedImageFile = new File([blob], "cover-image", {
          type: "image/jpeg",
        });
        setImages([...images, { uri: croppedDataURL, file: croppedImageFile }]);
      });
    document.getElementById("closeModal").click();
    setSelectedImg(null);
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

  const handleFinish = () => {
    if (images.length === 0) {
      toast.warning("Please add at least one image.");
      return;
    }
  };

  useEffect(() => {
    const modal = document.getElementById("cropperModal");
    modal.addEventListener("hidden.bs.modal", () => {
      setZoom(1);
      setCrop({ x: 0, y: 0 });
      setcroppedAreaPixels(null);
      setSelectedImg(null);
    });
  }, []);

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
                  Aspect Ratio 2:1
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
      {/* Modal */}
      <button
        id="openModal"
        className="d-none"
        data-bs-target="#cropperModal"
        data-bs-toggle="modal"
      ></button>
      <div
        className="modal fade"
        id="cropperModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body p-4">
              <h5 className="mb-4">Crop Image</h5>
              <div
                className="crop-container mb-4"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                }}
              >
                <Cropper
                  image={selectedImg}
                  crop={crop}
                  zoom={zoom}
                  aspect={2 / 1}
                  cropShape="rect"
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={(croppedArea, croppedAreaPixels) =>
                    setcroppedAreaPixels(croppedAreaPixels)
                  }
                />
              </div>
              <div className="controls">
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={(e) => {
                    setZoom(e.target.value);
                  }}
                  className="zoom-range"
                />
              </div>
              <div className="d-flex">
                <button
                  type="submit"
                  className="primaryButton me-3"
                  style={{ border: 0 }}
                  onClick={handleSaveImage}
                >
                  Save
                </button>
                <div
                  className="primaryButtonOutline"
                  id="closeModal"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </div>
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
        <button
          style={{ border: 0 }}
          className="primaryButton px-5"
          onClick={handleFinish}
        >
          Finish
          <CheckCircleIcon className="ms-2" />
        </button>
      </div>
    </div>
  );
}
