import React from "react";
import "../products/Office.css";
import Footer from "../components/footer";
import Erplogo from "../images/Erplogo.png";
import Scrolltop from "../components/Scrolltop"
import Stickyicons from "../components/Stickyicons";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function office() {
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
            <img src={Erplogo} className="bio-img" alt="logo" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Enterprise Resource Planning</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              ERP (enterprise resource planning) describes software that lets an
              enterprise manage user access to its network resources
              efficiently. ERP software generally lets a user sign on to
              different enterprise systems and applications using the same
              password.<br></br>
              ERP (enterprise resource planning) also describes software that
              manages all of a company's assets and resources, including such
              basic applications as general ledger, accounts payable and
              receivable, as well as manufacturing, inventory, and human
              resources.
            </p>
          </div>
        </section>

        <div className="diagonal">
          <div className="wrapper">
            <p data-aos="fade-left"
     data-aos-duration="1000"><br/>
              An Enterprise resource planning (ERP) software or system
              development helps organizations better manage their resources. The
              most vital aim to be achieved through ERP software is to integrate
              back office business processes and facilitating the information
              flow within an organization to take data-driven decisions. 
            </p>
          </div>
        </div>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            
            <p data-aos="fade-left"
     data-aos-duration="1000">
              With a dedicated enterprise resource planning software / system
              development, an organization can standardize and automate its
              processes to achieve high level of efficiency in its operations.
              The ERP system ensures that all employees in an organization are
              working with the same data and watching the same key-performance
              indicators.
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop/>
      </div>
    </>
  );
}
