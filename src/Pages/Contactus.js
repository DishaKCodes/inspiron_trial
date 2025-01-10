import React from 'react'
import AboutCSI from '../components/AboutCSI'
import Navbar from '../components/Navbar';
import hackathon_bg from "../images/bg.png";
import Footer from "../components/Footer";

export default function Contactus(props) {
  return (
    <div>
        
      <div style={
        {
        //   width: '100%',
        backgroundImage: `url(${hackathon_bg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight:"100vh",
        minWidth:"100%",
        backgroundRepeat:"no-repeat"
        }


      }>
        <Navbar {...props}/>
        <AboutCSI></AboutCSI>
        <Footer/>
      </div>
    </div>
  )
}
