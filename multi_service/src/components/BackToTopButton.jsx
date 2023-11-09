import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", toggleBackToTop);

    return () => {
      window.removeEventListener("scroll", toggleBackToTop);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`back-to-top ${isActive ? "active" : ""}`}
      onClick={handleBackToTop}
    >
      <i className="fa fa-arrow-up"></i>
    </div>
  );
};

export default BackToTopButton;
