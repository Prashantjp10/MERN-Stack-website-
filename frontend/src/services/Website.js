import React from "react";
import "../services/Ios.css";
import Websitede from "../images/Websitede.jpg";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Website() {
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
            <img src={Websitede} className="bio-img" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Web Designing And Web Development</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Kitkat Software Technologies is a well-known website builder in
              Coimbatore, providing affordable web design services to both small
              and large businesses, as well as individuals. We provide more than
              just website design; we also bring you more potential customers.
              Our team creates SEO-friendly web design strategies. We perform
              quality control checks to ensure excellent results.
            </p>
          </div>
        </section>

        <section className="spikes">
          <div className="wrapper">
            <p data-aos="fade-left"
     data-aos-duration="1000">
              We design websites that are visually appealing, mobile responsive,
              lag-free, and SEO friendly. We provide custom mobile web design
              services in Coimbatore. We are known for our low costs, which we
              achieve by utilising an open source content management system
              (CMS). Hire us to create a website that is both beautiful and
              profitable.
            </p>
          </div>
        </section>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              We deliver highly optimised mobile responsive web applications
              across all verticals. We specialise in custom websites with a
              variety of features that can be integrated with business
              intelligence. We specialise in providing web development solutions
              that are customised to your business model.
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop />
      </div>
    </>
  );
}
