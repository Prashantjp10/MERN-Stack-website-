import React from "react";
import "../products/Office.css";
import Medi from "../images/Medi.jpg";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop"
import Stickyicons from "../components/Stickyicons";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Medical() {
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
      <div className="biometric-body" >
        <section>
          <div className="wrapper"onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src={Medi} className="bio-img" alt="logo" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Medical Billing</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Medical billing software automates the healthcare billing process
              for doctors and medical offices. Finding the best computer
              application for your needs will increase your office's reimbursed
              rates, revenue, and help you build a long-term medical practice.
              <br />
              Kitkat Software Technologies' medical billing and coding software
              enables the quick and easy receipt of payments and the processing
              of financial transactions. We develop medical software for
              hospitals, private doctor's practices, pharmacies, and medical
              device and supply companies
            </p>
          </div>
        </section>

        <div className="diagonal">
          <div className="wrapper">
            <p data-aos="fade-left"
     data-aos-duration="1000">
              An automated medical billing system makes it simple to manage
              medical bills and avoid errors. Furthermore, the software will aid
              in the acceleration of most billing procedures, easing the burden
              on the medical billing unit. The majority of medical institutions
              use medical billing systems, with many claiming lower error rates
              and improved medical income responsibility. Understanding and
              developing medical billing software is thus the first step towards
              preventing your medical staff from becoming overwhelmed with paper
              bills.
            </p>
          </div>
        </div>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Our medical billing software development firm provides a
              cross-functional team of senior IT professionals capable of
              payment-processing system engineering services such as front-end,
              back-end, and mobile development, remote tech consulting, user
              interface design, and quality assurance services for custom
              medical billing systems
            </p>
          </div>
        </section>

        <div className="diagonal">
          <div className="wrapper">
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Booking Appointments </h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              While online appointment scheduling is not something to look for
              in standard medical billing software, having it in your billing
              system can be beneficial.
            </p>
            <h2 className="section-title"> Coding Automation </h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Handling treatment plans is far too detailed and complex. Medical
              billing and coding software automates the coding of treatment
              details for patients in the system.
              <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000"> Reporting </h2>
              Based on data analysis, custom medical billing platforms generate
              a variety of reports, including claims history and current status.
            </p>
          </div>
        </div>

        <section>
        <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Integration of Payment Methods </h2>
          <p data-aos="fade-left"
     data-aos-duration="1000">
            Medical billing software requires credit card processing. Aside from
            that, the system offers a number of other payment options.
          </p>
          <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000"> An easy-to-use interface </h2>
          <p data-aos="fade-left"
     data-aos-duration="1000">
            We create user-friendly solutions while also developing high-quality
            core features. Our clients benefit from an easy-to-use interface and
            best practises in user experience.
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000"> Pre-Registration of Patients </h2>
            Patients can use the medical billing software to pre-register for
            services, which is linked to their system accounts.
          </p>
        </div>
        </section>
        <Footer />
        <Scrolltop/>
      </div>
    </>
  );
}
