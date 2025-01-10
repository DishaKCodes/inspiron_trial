import React from 'react'
import Navbar from '../components/Navbar';
import hackathon_bg from "../images/bg.png";
import Footer from "../components/Footer";
import Register from "../components/RegisterNow";

export default function JudgesandSponsor(props) {
  return (
    <div>
        
       <div style={{
        
        backgroundImage: `url(${hackathon_bg})`,
        backgroundSize: 'cover',
       
        minHeight:"100vh",
        minWidth:"100%",
        backgroundRepeat:"no-repeat"
      }}>
        <Navbar {...props}/>
        <Register></Register>
        <Footer/>
      </div>
    </div>
  )
}
