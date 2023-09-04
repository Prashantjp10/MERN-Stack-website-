import React from "react";
import "../services/Ios.css";
import Webhostimg from "../images/Webhostimg.jpg";
import Footer from "../components/footer";
import Scrolltop from "../components/Scrolltop";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Webhost() {
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
            <img src={Webhostimg} className="bio-img" />
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Web Hosting</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Web hosting is a service that allows businesses and individuals to
              publish their websites or web pages on the Internet. A web host,
              also known as a web hosting service provider, is a company that
              offers the technologies and services required for a website or
              webpage to be viewed on the Internet. Websites are hosted, or
              saved, on specialised computers known as servers. All Internet
              users need to do to view your website is type your website address
              or domain into their browser.
            </p>
          </div>
        </section>

        <section className="spikes">
          <div className="wrapper">
            <p data-aos="fade-left"
     data-aos-duration="1000">
              We provide Web hosting services to ensure that our clients'
              websites are available 24 hours a day, seven days a week.
              Furthermore, when website owners require assistance or
              troubleshooting (e.g., script debuting, email not being able to
              send/receive, domain name renewal, and so on), the web host's
              in-house support is the go-to person. Our professional web hosting
              service ensures that business owners have a hassle-free
              experience, allowing them to focus their time and effort on their
              businesses.
            </p>
          </div>
        </section>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Our Web Service provides a wide range of Expert Shared Hosting
              Plans to meet any requirement. Whether you're starting a blog with
              WordPress, implementing a CMS solution with Drupal, launching an
              online store with E-Commerce, or any other venture, our Expert Web
              Hosting plans are exactly what you've been looking for.
            </p>
          </div>
        </section>
        <Footer />
        <Scrolltop />
      </div>
    </>
  );
}
