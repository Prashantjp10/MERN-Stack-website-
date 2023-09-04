import React from "react";
import "../products/Office.css";
import Pointsale from "../images/Pointsale.jpg";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop"
import Stickyicons from "../components/Stickyicons";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Pos() {
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
            <img src={Pointsale} className="bio-img" alt="logo" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">
              POS (Point On Sale) on Billing Software
            </h2 >
            <p data-aos="fade-left"
     data-aos-duration="1000">
              A point of sale system is a combination of software and hardware
              that allows merchants to take transactions and simplify key
              day-to-day business operations Shoppers today look forward to a
              greater exit experience as much as the in-store experience.
              Unmatched billing speed aided with integration to all POS
              accessories. Operate your business on cloud without installing a
              Point of sale software, keep your business market ready, have
              critical business reports delivered to you 24x7 with web based
              POS.
            </p>
          </div>
        </section>

        <div className="diagonal">
          <div className="wrapper">
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">How to Works</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Now travelers need less hand-holding and more knowledge with
              higher service levels. This means business models are changing in
              every link of the travel service chain and the travel technologies
              that sufficed twenty – or even ten – years ago simply won’t do the
              job anymore. Just Billing Free Retail POS is a simple, yet
              comprehensive billing point of sale software that automates your
              business. This intuitive Retail POS app makes purchasing,
              inventory, payments, expenses and customer management easy,
              alongside billing and invoicing.
            </p>
          </div>
        </div>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Needs of POS Billing</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
               Peak hour sales, festival season crowd needs
              no extra hands & efforts. Mobile app SellSmart, can help you bill
              on the move. Take payments with ease - cash, card, coupon, gift
              voucher, part-cash, part-card payment & more. Card swipe
              integration to bill faster. Design and print barcode labels. Print
              purchase price in barcode as alphanumeric. Issue quotation,
              proforma, follow-up & do more sales .<br/><br/> Exchange old for new,
              different prices for same item, customizable tax options i.e. TAX
              on MRP/Selling rate - predefine them or manage from bill screen
              also. Dayone- bill instantly from the day installation is
              complete. Billing will not stop even when main computer is down,
              uninterrupted 'Offline billing' provides peace of mind. Complete
              customer history in click of a button. Surprise customers with
              instant free offers, item discounts with shortcuts keys in the
              billing screen itself .
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop/>
      </div>
    </>
  );
}
