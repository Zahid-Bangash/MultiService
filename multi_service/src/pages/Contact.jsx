import React, { useState } from "react";

import contactImg from "../assets/contact.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [questionDropDown, setquestionDropDown] = useState(null);

  const faqs = [
    {
      question: "How can I work as a Handyman?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptate deserunt natus maiores voluptatem sunt voluptatibus quas veritatis dolorem debitis esse, aspernatur ut quibusdam nesciunt eum modi illum? Illum, facere?",
    },
    {
      question: "What is the service and how to create it?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptate deserunt natus maiores voluptatem sunt voluptatibus quas veritatis dolorem debitis esse, aspernatur ut quibusdam nesciunt eum modi illum? Illum, facere?",
    },
    {
      question: "How to hire a Handyman?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptate deserunt natus maiores voluptatem sunt voluptatibus quas veritatis dolorem debitis esse, aspernatur ut quibusdam nesciunt eum modi illum? Illum, facere?",
    },
    {
      question: "How can I work as a Handyman?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptate deserunt natus maiores voluptatem sunt voluptatibus quas veritatis dolorem debitis esse, aspernatur ut quibusdam nesciunt eum modi illum? Illum, facere?",
    },
  ];

  const handleAddData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSumbitForm = (e) => {
    e.preventDefault();
  };

  const toggleQuestion = (index) => {
    if (questionDropDown === index) {
      setquestionDropDown(null);
    } else {
      setquestionDropDown(index);
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: "#000", color: "white" }}>
        <div className="container py-5">
          <h1 style={{ fontWeight: "600" }}>Contact</h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="row mb-5">
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
        <div className="d-flex flex-column align-items-center">
          <h1 className="mb-5" style={{ fontWeight: "600" }}>
            Frequently Asked Questions
          </h1>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="shadow p-4 mb-4 w-100"
              style={{
                borderRadius: "10px",
              }}
            >
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <div style={{ fontSize: "20px", fontWeight: "500" }}>
                  {faq.question}
                </div>
                <div
                  className={`fa fa-${
                    questionDropDown === index ? "minus" : "plus"
                  }`}
                ></div>
              </div>
              {questionDropDown === index && (
                <>
                  <hr />
                  <p className="mt-3 text-secondary">{faq.answer}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
