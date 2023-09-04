import React from "react";
import "../components/Home.css";



function Card2() {
  return (
    <><section className="card2-section-body"></section>
        <div className="card2-section"  >
          <div className="card2-title" >
            <h1 className="heading" data-aos="fade-right"
              data-aos-duration="2000">Our Services </h1>
          </div>
          <p className="heading p__color" data-aos="fade-left"
              data-aos-duration="2000">
            There are many variations of passages of Lorem Ipsum available,
          </p>
          <p className="heading p__color" data-aos="fade-right"
              data-aos-duration="2000">
            but the majority have suffered alteration,
          </p>
          <div className=" card2-services">
            <div className="card2-box" data-aos="fade-up"
              data-aos-duration="2000" >
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h2>App Development</h2>
              <p>
                Want to develop your digital or enterprise assistants on mobile?
                Emerging of smart phones users demanding the mobile apps.
              </p>
              <a href="/Android" className="card2-btn">
                Read more
              </a>
            </div>
            <div className="card2-box" data-aos="fade-up" data-aos-duration="2000">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h2>Digital Marketing</h2>
              <p>
                Want to promote your product or services on digital platform?
                Our knowledges on SEO, SMO, PPC helps you to develop business.
              </p>
              <a href="/Ecomerce" className="card2-btn">
                Read more
              </a>
            </div>

            <div className="card2-box" data-aos="fade-up" data-aos-duration="2000">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h2>Website Development</h2>
              <p>
                Websites are the most important channels for presenting your
                product and services and most significant part of business.{" "}
              </p>
              <a href="/Customize" className="card2-btn">
                Read more
              </a>
            </div>
          </div>
        </div>
    </>
  );
}

export default Card2;
