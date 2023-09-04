import React from "react";
import "../services/Ios.css";
import Iphone from "../images/Iphone.webp";
import Footer from "../components/footer";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Ios() {
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
            <img src={Iphone} className="bio-img"  />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">IOS App Development</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              IOS Application Development is growing rapidly in the market,
              allowing for easy interaction and instant effective communication.
              The recent trend of integrated app stores within smartphones is
              crucial. A mobile application is the most effective way to engage
              your target audience on a more personal level. A mobile
              application is also far more conversion-friendly than a website
              because installation indicates that a user is interested in your
              company. That is why user is downloading and installing your
              application.
            </p>
          </div>
        </section>

        <section className="spikes">
          <div className="wrapper">
            <p data-aos="fade-left"
     data-aos-duration="1000">
              We have extensive experience creating business-centric,
              goal-focused, and performance-based apps for your future company
              using our mobile app developers. We only hire qualified mobile app
              developers who have custom hand-code development experience, as
              well as strong creativity and analytical abilities. We have
              developed more mobile apps for major platforms such as Android,
              iOS, Windows, and cross-browser phone apps over the years. <br />
              Are you looking for IOS Application Development Service? Feel free
              to contact us @ 7010816299
            </p>
          </div>
        </section>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Our Kitkat software technologies app developers in Coimbatore have
              been critical to our product's success. They have worked
              incredibly hard to create a high-quality product that meets our
              users' needs while remaining user-friendly. They used their
              knowledge and experience to create a mobile app that is safe,
              reliable, and simple to use. They have done everything with high
              accuracy and dedication, from coding and debugging to testing and
              deployment.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
