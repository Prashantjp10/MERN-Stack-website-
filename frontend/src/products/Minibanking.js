import React from "react";
import "../products/Office.css";
import Miniba from "../images/Miniba.png";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop"
import Stickyicons from "../components/Stickyicons";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Minibanking() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
     <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
    <Stickyicons/>
      <div className="biometric-body">
        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src={Miniba} className="bio-img" alt="logo" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Mini banking software</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              With our mini banking system, you'll have complete control over
              your transactions and other business data. The software is
              powerful and effective, and many companies have succeeded in their
              business endeavors by implementing the software. The software
              caters to all types of businesses—from small enterprises to large
              corporate houses. This type of software has become increasingly
              popular, particularly because of its ability to handle a wide
              range of financial transactions. We have built one of the best
              mini banking software programs, which offers the highest amount of
              security. This type of company deals with highly secured financial
              data.
            </p>
          </div>
        </section>

        <div className="diagonal">
          <div className="wrapper">
            <h2 className="section-title">Procedures</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Master entry: Under this module, you will find the following
              options:
              <br /> Member/Associate - This section provides an option for
              adding new members or associates as well as removing or deleting a
              member or associate. You can view all kinds of details about each
              member or associate in this section.
            </p>
          </div>
        </div>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Branch - This section allows a user to create branches for the
              company where he or she can transfer the funds from one branch to
              another branch in case there is any need.
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop/>
      </div>
    </>
  );
}
