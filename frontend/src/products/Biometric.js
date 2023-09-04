import React from "react";
import { useEffect, useState } from 'react';
import "../products/Biometric.css";
import Footer from "../components/footer";
import Biometricimg from "../images/Biometricimg.jpg"
import Scrolltop from "../components/Scrolltop";
import Stickyicons from "../components/Stickyicons";
import {motion} from "framer-motion";


export default function Biometric() {
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
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <img src={Biometricimg} className="bio-img" alt="logo" />
            <h2 data-aos="fade-right"
     data-aos-duration="1000" className="section-title">
              Biometric Based HRM (Human Resource Management)
            </h2><br/>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Biometric technologies are used to analyze and measure
              characteristics such as voice patterns, hand measurements, and
              iris patterns. These characteristics are then compared against the
              stored characteristics of the individual trying to gain access to
              a building or network; this system allows for accurate
              identification of an individual's identity down to the tiniest
              detail. This type of technology allows for accurate identification
              of employees in order to prevent fraud and theft in the workplace.
            </p>
          </div>
        </section>

        <div className="diagonal" >
          <div className="wrapper">
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000" >Diagonal</h2>
            <p  onMouseEnter={textEnter} onMouseLeave={textLeave} data-aos="fade-left"
     data-aos-duration="1000" >
              Biometric technology truly excels in bringing about workplace
              transparency. Employers now have the ability to know for sure what
              employees are doing, when they are doing it, and who else is
              involved. If a manager needs to take an inventory of his or her
              employees, a simple biometric scan can help him perform the task
              with ease. This prevents cases of attendance fraud and makes it
              easy for managers to manage their human resources responsibly.
            </p>
          </div>
        </div>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Saves Time</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Installing a biometric device in a business will help save costs
              and cater to the time and attendance needs of employers for years.
              This means business owners do not have to hire a person to manage
              time and attendance or worry about cases of fraud. A biometric
              device will make life easier for all involved in HR management and
              will save your business money.
            </p>
          </div>
        </section>

        <div className="diagonal">
          <div className="wrapper">
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">Enhance Puntuality</h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              Biometric attendance devices ensure accurate attendance reports.
              So employers can no longer claim their employees are late for work
              without solid evidence. Employees will also not be able to report
              inaccurate hours to inflate their income. This helps to reduce
              costs for businesses and ensure that workers are compensated
              fairly for the hours they have worked.{" "}
            </p>
          </div>
        </div>

        <section>
          <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h2 className="section-title" data-aos="fade-right"
     data-aos-duration="1000">
              Increased Efficiency for Employee Maintenance
            </h2>
            <p data-aos="fade-left"
     data-aos-duration="1000">
              When it comes to creating extra hours or overtime, human resource
              planning can easily run a report to see who is on time, working
              late, and putting in extra. This reduces the time in the planning
              process and allows them to schedule efficiently.
            </p>
          </div>
        </section>
        <Footer/>
        <Scrolltop/>
      </div>
     
    </>
  );
}
