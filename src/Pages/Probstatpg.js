import React from "react";
import Domains from "../components/Domains";
import Navbar from "../components/Navbar";
//import Prbstat from "../components/Prbstat";


import hackathon_bg from "../images/bg.png";
import Footer from "../components/Footer";

export default function Probstatpg(props) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${hackathon_bg})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          minHeight:"100vh",
          minWidth:"100%",
          backgroundRepeat:"no-repeat"
        }}
      >
        <Navbar {...props}/>
        <Domains></Domains>
       {/* <Prbstat></Prbstat>*/}
        <Footer/>
      </div>
    </div>
  );
}
