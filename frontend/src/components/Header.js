import React, { useState } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import Services from "../components/Services";
// import Carrier from "../components/Carrier";
import Register from "../components/Register";
import Ecomerce from "../products/Ecomerce";
import Biometric from "../products/Biometric";
import Medical from "../products/Medical";
import Minibanking from "../products/Minibanking";
import Office from "../products/Office";
import Pos from "../products/Pos";
import Travel from "../products/Travel";
import Android from "../services/Android";
import Crm from "../services/Crm";
import Customize from "../services/Customize";
import Ios from "../services/Ios";
import Webhost from "../services/Webhost";
import Website from "../services/Website";
import Bulk from "../services/Bulk";


const Header = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.6,
        }}
      >
        <Router>
          <header className="header__middle">
            <div className="container">
              <div className="row">
                <div className="header__middle__menus">
                  <nav className="main-nav ">
                    {isResponsiveclose === true ? (
                      <>
                        <span
                          className="menubar__button"
                          style={{ display: "none" }}
                          onClick={toggleClass}
                        >
                          {" "}
                          <FiXCircle />{" "}
                        </span>
                      </>
                    ) : (
                      <>
                        <span
                          className="menubar__button"
                          style={{ display: "none" }}
                          onClick={toggleClass}
                        >
                          {" "}
                          <FiAlignRight />{" "}
                        </span>
                      </>
                    )}

                    <ul className={boxClass.join(" ")}>
                      <li className="menu-item">
                        <NavLink
                          exact
                          activeClassName="is-active"
                          onClick={toggleClass}
                          to={`/`}
                        >
                          {" "}
                          Home{" "}
                        </NavLink>
                      </li>
                      <li className="menu-item ">
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/about`}
                        >
                          {" "}
                          About{" "}
                        </NavLink>{" "}
                      </li>
                      <li
                        onClick={toggleSubmenu}
                        className="menu-item sub__menus__arrows"
                      >
                        {" "}
                        <Link to="#home">
                          {" "}
                          Products <FiChevronDown />{" "}
                        </Link>
                        <ul className={boxClassSubMenu.join(" ")}>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Biometric`}
                            >
                              {" "}
                              Biometric Based HRM{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Ecomerce`}
                            >
                              {" "}
                              E-Commerce{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Office`}
                            >
                              {" "}
                              Office ERP{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Minibanking`}
                            >
                              {" "}
                              Mini-Banking{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Travel`}
                            >
                              {" "}
                              Travel ERP{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Pos`}
                            >
                              {" "}
                              POS On Billing{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Medical`}
                            >
                              {" "}
                              Medical Billing{" "}
                            </NavLink>{" "}
                          </li>
                        </ul>
                      </li>
                      {/* <li className="menu-item ">
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/carrier`}
                        >
                          {" "}
                          Carrier{" "}
                        </NavLink>{" "}
                      </li> */}
                      <li
                        onClick={toggleSubmenu}
                        className="menu-item sub__menus__arrows"
                      >
                        {" "}
                        <Link to="/Home">
                          {" "}
                          Services <FiChevronDown />{" "}
                        </Link>
                        <ul className={boxClassSubMenu.join(" ")}>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Customize`}
                            >
                              {" "}
                              customizedWeb{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Website`}
                            >
                              {" "}
                              Website Design And Management{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Webhost`}
                            >
                              {" "}
                              Web Hosting{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Android`}
                            >
                              {" "}
                              Android Application Development{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Ios`}
                            >
                              {" "}
                              IOS Application Development{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Bulk`}
                            >
                              {" "}
                              Bulk SMS{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Crm`}
                            >
                              {" "}
                              CRM{" "}
                            </NavLink>{" "}
                          </li>
                          <li>
                            <NavLink
                              onClick={toggleClass}
                              activeClassName="is-active"
                              to={`/Office`}
                            >
                              {" "}
                              ERP{" "}
                            </NavLink>{" "}
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item ">
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/Contact`}
                        >
                          {" "}
                          Contact{" "}
                        </NavLink>{" "}
                      </li>
                    </ul>
                  </nav>
                  <div className="sign-btn">
                    <button className="signin">
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Register`}
                      >
                        {" "}
                        Register{" "}
                      </NavLink>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home/>} />
            <Route path="/ecomerce" element={<Ecomerce />} />
            <Route path="/biometric" element={<Biometric />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/minibanking" element={<Minibanking />} />
            <Route path="/office" element={<Office />} />
            <Route path="/pos" element={<Pos />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/home" element={<Services />} />
            {/* <Route path="/carrier" element={<Carrier />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/android" element={<Android />} />
            <Route path="/bulk" element={<Bulk />} />
            <Route path="/crm" element={<Crm />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/ios" element={<Ios />} />
            <Route path="/webhost" element={<Webhost />} />
            <Route path="/website" element={<Website />} />
          </Routes>
        </Router>
      </motion.div>
    </>
  );
};

export default Header;
