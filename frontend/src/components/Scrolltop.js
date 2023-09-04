import React, { useState, useEffect } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import  "../components/Scrolltop.css"

function Scrolltop() {
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [is_visible, set_visible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      set_visible(true);
    } else {
      set_visible(false);
    }
  };
  return (
    <>
      <div>
        {" "}
        {is_visible && (
          <>
            <span onClick={scrollToTop} className="scrolls">
              {" "}
              <RiArrowUpSLine/>{" "}
            </span>
            <span className="ltx-hex">
              <span className="ltx-hex-inner"></span>
            </span>
          </>
        )}
      </div>
    </>
  );
}

export default Scrolltop;
