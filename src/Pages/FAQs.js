import React from 'react'
import Navbar from '../components/Navbar';
import FAQs from '../components/FAQs';
import hackathon_bg from "../images/bg.png";
import Footer from "../components/Footer";

export default function JudgesandSponsor(props) {
  return (
    <div>
        
       <div style={{
        
        backgroundImage: `url(${hackathon_bg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight:"100vh",
        minWidth:"100%",
        backgroundRepeat:"no-repeat"
      }}>
        <Navbar {...props}/>
        <FAQs></FAQs>
        <Footer/>
      </div>
    </div>
  )
}
