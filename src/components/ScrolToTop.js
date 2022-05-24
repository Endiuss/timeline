import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <h3>Go up!</h3>
        </div>
      )}
    </div>
  );
}
