import React from "react";
import "./Contact.css"
import Footer from "./footer";

 const Contact = () => {
    return (
      <>
      <div className="contact-body"> 
        <div className="contact-container">
          <div className="form-container">
            <h3>Message Us</h3>
            <form action="" className="contact-form">
              <input type="text" placeholder="Your Name" required/>
              <input type="email"  name=""  id="" placeholder="Enter Your Email" required/>
              <textarea name="" id="" cols={30} rows={10} placeholder="Write Message Here..." required></textarea>
              <input type="submit" className="send-button" />
            </form>
          </div>
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.323119654809!2d76.97610157410794!3d11.014365654761724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584d03d410a3%3A0x79e8132c3d3cdf88!2sKitkat%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1682540196007!5m2!1sen!2sin"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>

          </div>
          </div>
          </div>
          <Footer/>       
    </>
  );
};

export default Contact;
     