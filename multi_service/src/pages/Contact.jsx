import React, { useState } from "react";

import contactImg from "../assets/contact.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleAddData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSumbitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div style={{ backgroundColor: "#000", color: "white" }}>
        <div className="container py-5">
          <h1 style={{ fontWeight: "600" }}>Contact Us</h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h1 className="mb-3" style={{ fontWeight: "600" }}>
              How Can We Help You?
            </h1>
            <div className="text-secondary mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto minima nihil provident ipsam neque molestias! Deserunt
              sequi aperiam, recusandae eos blanditiis quo qui voluptatibus
              itaque iure eligendi error natus nisi.
            </div>
            <img src={contactImg} alt="contact-img" style={{ width: "100%" }} />
          </div>
          <div className="col-12 col-lg-6">
            <div className="shadow px-4 py-5" style={{ borderRadius: "20px" }}>
              <div
                className="mb-4"
                style={{ fontSize: "28px", fontWeight: "600" }}
              >
                Get In Touch
              </div>
              <form onSubmit={handleSumbitForm}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label mb-3">
                    Name
                  </label>
                  <input
                    placeholder="Enter Your Name"
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleAddData}
                    required
                    style={{ height: "58px" }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label mb-2">
                    Email Address
                  </label>
                  <input
                    placeholder="Enter Your Email"
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleAddData}
                    required
                    style={{ height: "58px" }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Type Here..."
                    className="form-control"
                    rows={7}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleAddData}
                    required
                  />
                </div>
                <button
                  style={{ border: 0 }}
                  className="primaryButton d-inline-block py-3 px-5"
                >
                  Send <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
