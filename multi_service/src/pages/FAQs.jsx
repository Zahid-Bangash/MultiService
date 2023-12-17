import React, { useState } from "react";

export default function FAQs() {
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

  const toggleQuestion = (index) => {
    if (questionDropDown === index) {
      setquestionDropDown(null);
    } else {
      setquestionDropDown(index);
    }
  };

  return (
    <div className="container py-5">
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
  );
}
