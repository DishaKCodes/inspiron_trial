import React from 'react'
import Navbar from '../components/Navbar';
import Judges from '../components/Judges';
import hackathon_bg from "../images/bg.png";
import Footer from "../components/Footer";
export default function Registrationspg(props) {
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
        <Judges></Judges>
        <Footer/>
      </div>
    </div>
  )
}
