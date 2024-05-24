import React, { useState } from "react";
import "./scrollToTopComponent.css";

const ScrollToTop = () => {
  const [scrollCheck, setScrollCheck] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScrollCheck(true);
    } else {
      setScrollCheck(false);
    }
  }

  return (
    <div>
      {scrollCheck ? (
        <div
          overflow="hidden"
          background-color="#333"
          position="fixed"
          width="95%"
          fontFamily={"Montserrat"}
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "15px",
              zindex: "99",
              border: "none",
              outline: "none",
              cursor: "pointer",
              borderRadius: "4px",
              bg: "none",
              p: 0,
            }}
          >
            To Top Logo
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ScrollToTop;
