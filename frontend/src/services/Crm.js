import React from "react";
import "../services/Ios.css";
import Crmimg from "../images/Crmimg.jpg";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop";
import { HiChevronDoubleRight} from "react-icons/hi";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Crm() {
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
            <img src={Crmimg} className="bio-img" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Customer Relationship Management </h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              The most important aspect of business activities is customer
              relationship management (CRM) software solutions. Customers will
              ultimately determine your business's success. With the advent of
              technologies and management systems that drive business
              excellence, the world of business has changed its course and
              dimension.
            </p>
          </div>
        </section>

        <section className="spikes">
          <div className="wrapper">
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">
              Why should you opt for a Custom CRM development for your business?
            </h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Using Kitkat software technologies and our customer relationship
              management software, you can optimise your marketing efforts and
              create a more streamlined experience that is aligned with customer
              interests and needs. We offer the best CRM software development
              services in Coimbatore to assist you in identifying hidden
              opportunities, driving adoption of new features or products,
              improving the bottom line, and ensuring user satisfaction.
            </p>
          </div>
        </section>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Benefits of CRM Development Services</h2>
            <p data-aos="fade-up"
     data-aos-duration="1000">< HiChevronDoubleRight/> CRM can track customer activity at every point of contact.<br/>
            < HiChevronDoubleRight/> CRM keeps track of a customer's purchasing and selling habits.<br/>
            < HiChevronDoubleRight/> CRM can generate and track Purchase Orders, Sales Orders, and Invoices.<br/>
            < HiChevronDoubleRight/> CRM facilitates cross-selling and upselling by supplying historical data.
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop />
      </div>
    </>
  );
}
