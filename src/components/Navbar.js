import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const paths = [
//   { link: "/", title: "HOME", divClass: "" },
//   { link: "/prbstat", title: "PROBLEM STATEMENTS", divClass: "" },
//   { link: "/reg", title: "REGISTERS", divClass: "" },
//   { link: "/judge", title: "JUDGES", divClass: "" },
//   { link: "/contact", title: "CONTACT US", divClass: "" },
// ];

export default function Navbar(props) {
  const [paths, setPaths] = useState([
    { link: "/", title: "HOME", divClass: "" },
    { link: "/domains", title: "DOMAINS", divClass: "" },
    { link: "/judges", title: "JUDGES", divClass: "" },
    { link: "/sponsors", title: "SPONSORS", divClass: "" },
    { link: "/prizes", title: "PRIZES", divClass: "" },
    { link: "/contact-us", title: "CONTACT US", divClass: "" },
    {link:"/register",title:"REGISTER",divClass:""},
    {link:"/faqs",title:"FAQs",divClass:""}
  ]);

   useEffect(() => {
   const newPaths = [...paths];

    if (!props.location.pathname) return;
      const found = newPaths.find((path) => path.link === props.location.pathname);
    if (found) {
      const index = newPaths.indexOf(found);
       newPaths[index].divClass = "active-nav-link";
       setPaths(newPaths);
     }
   },[props]);

  return (
    <div>
      <header className="header glass">
        <a href="https://csi.coep.org.in" className="logo text-merriweather text-bold" style={{fontSize:"1.5rem",marginTop:"0.5rem"}}>
          CSI COEP TECH
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {paths.map((path, index) => (
            <li>
              <Link to={path.link}>{path.title}</Link>
              <div className={path.divClass}></div>
            </li>
          ))}
          {/* <li>
            <Link to="/">HOME</Link>
            <div className="active-nav-link"></div>
          </li>
          <li>
            <Link to="/prbstat">PROBLEM STATEMENTS</Link>
          </li>
          <li>
            <Link to="/reg">REGISTER</Link>
          </li>
          <li>
            <Link to="/judge">JUDGES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li> */}
        </ul>
      </header>
    </div>
  );
}
