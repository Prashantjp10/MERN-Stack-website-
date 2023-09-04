import React, { Component } from "react";
import ImageOne from "../aboutpages/ImageOne";
import ImageTwo from "../aboutpages/ImageTwo";
import ImageThree from "../aboutpages/ImageThree";
import ImageFour from "../aboutpages/ImageFour";
import ImageFive from "../aboutpages/ImageFive";
import "../components/About.css";
import Footer from "./footer";
import Scrolltop from "../components/Scrolltop"
import Stickyicons from "./Stickyicons"


export default class About extends Component {
  render() {
    return (
      <>
      <section className="about-body">
        <div className="about-container">
        <Stickyicons/>
          <ImageOne />
          <div className="text-box">
            <p className="text-msg" data-aos="fade-right" data-aos-duration="2000">
              KITKAT Software technologies is expertise in Web development,
              Application development, Mobile development, Creative design,
              Quality code awesome support Web development With sound domain
              knowledge we aim to deliver value to our customers through our
              innovative software solutions and services. It is highly essential
              factor for an business either online or offline is building an
              attractive and professional website which express the business
              offerings to the client in a smart way.
            </p>
            <div className="about-titles" data-aos="fade-up" data-aos-duration="2000">
            <h3 >Who we are</h3></div><br/>
            <h4>We Create, Design and Make it Real</h4><br/>
            <p className="msg-box" data-aos="fade-up" data-aos-duration="2000">
              Clients are made integral part of our team while executing the
              projects. This makes the audacious task of the software
              development and execution much simpler and easier, in tune with
              the client’s expectation. At I-Link, based on the situation and
              need of the project, we follow one of the following software
              development methodologies. Agile software development is a set of
              principles for software development in which requirements and
              solutions evolve through collaboration between self-organizing,
              cross-functional teams. It promotes adaptive planning,
              evolutionary development, early delivery, and continuous
              improvement, and it encourages rapid and flexible response to
              change. Agile itself has never defined any specific methods to
              achieve this, but many have grown up as a result and have been
              recognized as being 'Agile'.
            </p>
          </div>
          <ImageTwo />
          <div className="text-box">
          <div className="about-titles">
            <h3 data-aos="fade-up" data-aos-duration="2000">Our SKills</h3></div><br/>
            <p className="msg-box"data-aos="fade-up" data-aos-duration="2000">
              KITKAT is established primarily to carry out the offshore software
              development projects and registered as a 100% Software export
              unit. KITKAT has successfully delivered medium and large size
              projects on time and under budget using the Offshore Delivery
              Model with the help of Managerial and Technical skill sets. With
              an experience of over 5+ years now, KITKAT has adapted to various
              changes to understand the cross culture needs of the region
              specific customers.
            </p>
          </div>
          <ImageThree />
          <div className="text-box">
          <div className="about-titles" >
            <h3 data-aos="fade-up" data-aos-duration="2000">Our Vision</h3></div><br/>
            <p className="msg-box" data-aos="fade-up" data-aos-duration="2000">
              To be a premier information technology solutions and services
              provider, by excelling in fulfilling the needs of its customers,
              partners and employees, by providing the most efficient and
              effective services and solutions, utilizing the best resources. We
              provide highly qualified and experienced Resources at a fraction
              of onsite prices. We meet any challenging schedule using our large
              pool of Offshore resources.
            </p>
          </div>
          <ImageFour />
          <div className="text-box">
          <div className="about-titles">
            <h3 data-aos="fade-up" data-aos-duration="2000">Our Mission</h3></div><br/>
            <p className="msg-box" data-aos="fade-up" data-aos-duration="2000">
              Our mission is to progressively realize our vision by providing
              innovative, proactive, efficient, cost-effective, quality
              solutions and services to our clients all over the world and by
              building a strong internal value system that provides the
              transparency and integrity in all the transactions among our
              employees, partners and customers. The methodology enforces strict
              adherence to adequate Documentation, Quality Control Processes and
              Client Communication.
            </p>
          </div>
          <ImageFive />
          <div className="text-box">
          <div className="about-titles">
            <h3 data-aos="fade-up" data-aos-duration="2000">Our offerings</h3><br/>
            </div>
              <p className="msg-box" data-aos="fade-up" data-aos-duration="2000">
                We offer end-to-end solutions to the customers from Hardware to
                Software,Network to Live Remote-Support,Embedded Systems to
                Project Assistance. We work meticlously to provide best in class
                services.
              </p>
          
          </div>
        </div>
        <Footer/>   
        <Scrolltop/>   
        </section>
      </>
    );
  }
}
