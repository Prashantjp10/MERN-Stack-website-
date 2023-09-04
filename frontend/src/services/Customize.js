import React from "react";
import "../services/Ios.css";
import Sample from "../images/Sample.png";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Customize() {
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
            <img src={Sample} className="bio-img" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Customized Web Development</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Kitkat Software Technologies is a leading Professional web
              designing company in Coimbatore that has been successfully
              providing Web Design Services to our clients for over 8 years and
              employs the most experienced professionals. Kitkat Software
              Technologies creates professional websites by implementing the
              most powerful and cutting-edge technologies to enhance your online
              presence. We are happy to serve you if you need a Creative
              e-commerce website, Advanced professional website, Top custom
              designed website, or a Basic website.
            </p>
          </div>
        </section>

        <section className="spikes">
          <div className="wrapper">
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Custom website design solutions may be the best option for clients
              who want high-quality designs and a website that stands out from
              the crowd. Kitkat Software Technologies is a one-stop firm for
              custom web design. We will design the website based on your
              preferences. We have extensive experience and expertise in all
              aspects of web design, including website development, programming,
              mobile applications, Android applications, e-commerce websites,
              and much more. 
            </p>
          </div>
        </section>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Several applications are performing admirably, which is a
              testament to the incredible features of real-time web
              applications. It is expected to grow at a faster rate in the
              future. The vast majority of users have a wide range of
              requirements that must be met as soon as possible.
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop/>
      </div>
    </>
  );
}
