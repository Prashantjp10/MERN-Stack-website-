import React from "react";
import "../products/Ecomerce.css";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop";
import { HiChevronDoubleRight } from "react-icons/hi";
import Stickyicons from "../components/Stickyicons";
import Ecomimg from "../images/Ecomimg.png";
import Ecom from "../images/Ecom.png";
import Ecomerceimg from "../images/Ecomerceimg.png";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Ecomerce() {
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
    <><motion.div
    className='cursor'
    variants={variants}
    animate={cursorVariant}
  />
      <Stickyicons />
      <section className="landing-section">
        <div className="landinng-container">
          <div className="content" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1
              className="landing-title"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              E-commerce
            </h1>
            <p
              className="landing-msg"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              E-commerce is the process of buying and selling merchandise via
              electronic means, such as the Internet, mobile applications, and
              other online platforms. It refers to both e-retail and electronic
              transactions. Most people who think about eCommerce think
              primarily about B2C transactions because these are the ones that
              are publicized most often. However, this is only one type of
              eCommerce.
            </p>
          </div>

          <div className="images">
            <img src={Ecom} data-aos="fade-up" data-aos-duration="2000" />
          </div>
        </div>
        <div className="landinng-container">
          <div className="images">
            <img
              src={Ecomerceimg}
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </div>
          <div className="content" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1
              className="landing-title"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              E-commerce
            </h1>
            <p
              className="landing-msg"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              While most people think of e-commerce as business-to-consumer
              (B2C), there are a number of other types of e-commerce. Business
              to Consumer (B2C) – Business to consumer (B2C) is a transaction
              between a business and an end-user or consumer. This includes
              selling directly to consumers via catalogs, website sales, or
              selling directly in brick and mortar stores.
            </p>
          </div>
        </div>
        <div className="landinng-container">
          <div className="content-two" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1
              className="landing-title-two"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Electronic Commerce Solutions Key Modules
            </h1>
            <p
              className="landing-msg-two"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <HiChevronDoubleRight /> Customer on-boarding
              <br />
              <HiChevronDoubleRight /> Funding and withdrawal
              <br />
              <HiChevronDoubleRight /> Payments and money transfers
              <br />
              <HiChevronDoubleRight /> Wallet management
            </p>
          </div>

          <div className="images">
            <img src={Ecomimg} data-aos="fade-up" data-aos-duration="2000" />
          </div>
        </div>
      </section>

      <Footer />
      <Scrolltop />
    </>
  );
}
