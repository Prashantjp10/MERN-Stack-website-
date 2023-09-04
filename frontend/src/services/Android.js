import React from "react";
import "../services/Ios.css";
import Appimg from "../images/Appimg.jpg";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Android() {
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
      <div className="biometric-body" >
        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src={Appimg} className="bio-img" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Android App Development</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Kitkat software technologies in Coimbatore has a team of Android
              developers who provide high performance functionality as well as
              influential looks for Android app development. When you choose us
              for Android app development, you will be working with the best
              industry because we are a dependable and honest Android app
              development company. To create the most competitive Android
              applications, we employ cutting-edge methods and world-class
              technologies.
            </p>
          </div>
        </section>

        <section className="spikes">
          <div className="wrapper">
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Android mobile app security</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              An automated system can send users notifications on a regular
              basis to keep them up to date on all developments. Aside from
              that, one of the other benefits of Android application development
              is the ease with which your Android app can be promoted due to the
              popularity of the platform. As a result, the Android operating
              system can offer you promotional as well as security benefits.
            </p>
          </div>
        </section>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Variants for different devices</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Android provides a lot of creative freedom for developing apps
              that take advantage of new technologies. Android is primarily
              intended for touchscreen mobile devices like smartphones and
              tablets. If your company is in the automotive industry, you could
              create a car dashboard app that allows users to play music from
              Android devices, navigate using Google Maps, and search for
              answers using Google Search.
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop />
      </div>
    </>
  );
}
