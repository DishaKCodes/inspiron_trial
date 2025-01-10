import React, { useEffect } from "react";
//import About from "../components/About";
import InspironIntro from "../components/InspironIntro";

import hackathon_bg from "../images/bg.png";
import Timeline from "../components/Timeline";
import Prizes from "../components/Prizes";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ranks from "./Ranks.js";
import RegisterNow from "../components/RegisterNow";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You also need to import the AOS styles
import { PowerGlitch } from 'powerglitch'

export default function Home(props) {
  useEffect(() => {
    PowerGlitch.glitch('.glitch-hover', { playMode: 'hover' })
    PowerGlitch.glitch(
      '.glitch-click',
      {
        playMode: 'hover',
        hideOverflow: true,
        timing: {
          duration: 1000,
          iterations: 15,
          easing: 'ease-in-out',
        },
        glitchTimeSpan: {
          start: 0.4,
          end: 0.7,
        },
        shake: {
          velocity: 10,
          amplitudeX: 0.4,
          amplitudeY: 0.4,
        },
        slice: {
          count: 4,
          velocity: 10,
          minHeight: 0.02,
          maxHeight: 0.40,
          hueRotate: true,
        },
      }
    )



  })
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${hackathon_bg})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          minHeight: "100vh",
          minWidth: "100%",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Navbar {...props} />
        <InspironIntro></InspironIntro>
        <center>
          <button className='glitch-click btn1 text-lato text-bold' style={{ fontSize: "1.4rem", paddingLeft: "20px", paddingRight: "20px", fontWeight: "bold" }} onClick={() => window.open("https://drive.google.com/file/d/1EyjfO6c6Wwj25ZPWfQzic1qgmWRDRXDN/view")}>PROBLEM STATEMENTS</button>
        </center>
        

            <About ></About>

          
        <Ranks />

        <Timeline></Timeline>

        {/* <Prizes></Prizes>*/}
        <Footer className="glass" />
      </div>
    </div>
  );
}
