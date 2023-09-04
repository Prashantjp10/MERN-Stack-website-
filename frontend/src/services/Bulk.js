import React from "react";
import "../services/Ios.css";
import Bulkimg from "../images/Bulkimg.jpg";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function bulk() {
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
            <img src={Bulkimg} className="bio-img" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Bulk SMS</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              BULK SMS Marketing is one of the most efficient, dependable, and
              cost-effective methods of marketing to your customers and
              businesses. This is the most straightforward method of promotion.
              This is utilized throughout the world and has received positive
              feedback from users.Bulk SMS, also known as mass text messaging,
              is a method of communicating with hundreds or thousands of
              contacts at the same time.
            </p>
          </div>
        </section>

        <section className="spikes">
          <div className="wrapper">
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Transactional SMS Services</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Transactional SMS services are ideal for communicating with
              existing customers by sending alerts, reminders, and updates. It
              is simple to send bulk SMS all over the world using a
              user-friendly web interface. Any type of information sharing SMS
              is referred to as transactional SMS. For sending Transactional
              SMS, the government has designated specific categories.
            </p>
          </div>
        </section>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Branding SMS Services</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Branding bulk sms is one of the most affordable marketing
              solutions on the market. With a single click, you can raise
              awareness about your brand, product, or offer in a matter of
              seconds. You can also immediately send new offers, products, or
              events to your clients. Alot SMS provides promotional SMS that can
              be used to promote your brand. You can send promotional SMS with
              your brand name, which will increase product awareness in the
              targeted market
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop />
      </div>
    </>
  );
}
