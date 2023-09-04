import React from "react";
import Fbsticky from "../images/Fbsticky.png";
import Insta from "../images/Insta.png";
import Linkedin from "../images/Linkedin.png";
import "../components/Home.css";

export default function Stickyicons() {
  return (
    <>
      <div class="sticky-container">
        <ul class="sticky">
          <li>
            <img src={Fbsticky} width="32" height="32" />
            <p className="sticky-para">
              <a href="https://www.facebook.com/codexworld" target="_blank">
                Facebook
              </a>
            </p>
          </li>

          <li>
            <img src={Linkedin} width="32" height="32" />
            <p className="sticky-para">
              <a
                href="https://www.linkedin.com/company/codexworld"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </li>

          <li>
            <img src={Insta} width="32" height="32" />
            <p className="sticky-para">
              <a href="https://www.pinterest.com/codexworld" target="_blank">
                Instagram
              </a>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
