import React from "react";
import "../products/Office.css";
import Trravelep from "../images/Trravelep.jpg";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop"
import Stickyicons from "../components/Stickyicons";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Travel() {
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
            <img src={Trravelep} className="bio-img" alt="logo" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">
              Travel ERP (Enterprise Resource Planning)
            </h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Travel ERP is Enterprise Resource Planning Software that automates
              all travel industry operations such as itinerary generation,
              inventory management, lead generation, and customer relationship
              management in order to effectively manage the travel industry with
              cutting-edge, streaming technology.
            </p>
          </div>
        </section>

        <div className="diagonal">
          <div className="wrapper">
            <p data-aos="fade-right"
     data-aos-duration="1000">
              Travel ERP Software assists travel companies and agencies automate
              all travel business processes with advanced features in order to
              increase business efficiency and online bookings. Kitkat is a
              leading Travel Technology Company that develops complete travel
              ERP software for travel agencies, such as booking engines,
              supplier integrations, agent management, API integration, and
              dynamic packaging.
            </p>
          </div>
        </div>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Kitkat Software Technologies offers the best Travel ERP Software
              with advanced XML API Integration, allowing travel companies to
              integrate hotel, flight, transfer, tour, and activity inventory
              from global travel suppliers through a single API integration.
              <br />
              The ERP systems used by our teams meet all of the requirements of
              modern travel companies. They allow travel companies to provide
              excellent customer service while maintaining departmental
              cooperation, completing daily tasks, and providing structured
              information in real time.
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop/>
      </div>
    </>
  );
}
