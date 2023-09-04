import React from "react";
import "./footer.css";
import {GrLocation} from "react-icons/gr";
import { BiMailSend} from "react-icons/bi";
import {FiPhoneCall} from "react-icons/fi";
import Fb from "../images/Fb.png";
import Insta from "../images/Insta.png";
import Linkedin from "../images/Linkedin.png";

const Footer = () => {
  return (
    <>
    <div className="gradient ">
      <div className="footer">
        <div className="footermenu section-padding">
          <div className="footer-links">
            <div className="footer-links-div">
              <h4> Products</h4>
              <a href="/Biometric">
                <p>Biometric Based HRM</p>
              </a>
              <a href="/Ecomerce">
                <p>E-Commerce</p>
              </a>
              <a href="/Office">
                <p>Office ERP</p>
              </a>
              <a href="/Minibanking">
                <p>Mini-Banking</p>
              </a>
              <a href="/Travel">
                <p>Travel ERP</p>
              </a>
              <a href="/Pos">
                <p>POS On Billing</p>
              </a>
              <a href="/Goldloan">
                <p>Gold Loan Management</p>
              </a>
              <a href="/Medical">
                <p>Medical Billing</p>
              </a>
              
            </div>
            <div className="footer-links-div">
              <h4> Services</h4>
              <a href="/Customize">
                <p>customizedWeb</p>
              </a>
              <a href="/Website">
                <p>Website Design And Management</p>
              </a>
              <a href="/Webhost">
                <p>Web Hosting</p>
              </a>
              <a href="/Android">
                <p>Android Application Development</p>
              </a>
              <a href="/Ios">
                <p>IOS Application Development</p>
              </a>
              <a href="/Bulk">
                <p>Bulk SMS</p>
              </a>
              <a href="/Crm">
                <p>CRM</p>
              </a>
              <a href=  "/Office">
                <p>ERP</p>
              </a>
            </div>
            <div className="footer-links-div">
              <h4><GrLocation/> FindUs</h4>
              <div className="footer-para">
              <p>NO.70/77,1st floor,Krishna complex,Coimbatore-641037</p></div>
              <h4><FiPhoneCall/> ContactUs</h4>
              <div className="footer-para">
              <p className="align">Phone:0422 495 7272</p>
              <p className="aligncenter">Mobile:7010816299</p></div>
              <h4><BiMailSend/> MailUs</h4>
              <div className="footer-para">
              <p>kitkatsoftwaretechnologies@gmail.com</p></div>
            </div>
            <div className="footer-links-div">
              <h4>Social Media</h4>
              <div className="social-media">
                <a href="">
                  <img src={Fb} alt=""/>
                </a>
                <a href="">
                  <img src={Insta} alt=""/>
                </a>
                <a href="">
                  <img src={Linkedin}  alt=""/>
                </a>
              </div>
            </div>
            <hr></hr>
            <div className="footer-below">
              <div className="footer-copyright">
                <p> @{ new Date().getFullYear()}KITKAT. All right reserved</p>

                <div className="footer-below-links">
                  <a href="/">
                    <div>
                      <p>Terms & Conditions</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
