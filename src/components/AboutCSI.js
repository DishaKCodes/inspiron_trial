import React from 'react'
import csi from "../images/csi.png";

export default function AboutCSI() {
  return (
    <div>
       <section class="text-gray-600 body-font ">
       <div class="flex flex-wrap w-full flex-col items-center text-center">
      <h1 class="font-large title-font  text-gray-900 titsponsorhead"  style={{"margin-top": "1em"}}></h1>
      
    </div>

<div class=" container px-5 py-24 mx-auto flex flex-col" data-aos="fade-in">
  
  <div class="abtcontainer lg:w-4/6 mx-auto">

    <div class="flex flex-col sm:flex-row mt-10">
      <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
      <img src={csi} alt="" className='bothimg'/>
        
      </div>
      <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left" style={{padding: "1em"}}>
        <p class="leading-relaxed text-lg mb-4 text-montserrat text-semibold">
          <h1 class="abthead text-merriweather text-bold">ABOUT CSI COEP TECH STUDENT CHAPTER</h1>
          The Computer Society of India (CSI) Student Chapter of College of Engineering Pune (COEP) , established in October 2018 is an active student organization which organizes a number of technical activities including workshops, competitions, technical symposiums, guest lectures etc. for its student members. Under the guidance of Department of Computer Engineering and Information Technology COEP, the student chapter has over 300 members and is run by a Core Team and faculty from the department.CSI COEP Student Chapter gives students the opportunity to grow in the field of IT.</p>
          <button className='btn1 text-lato text-bold' onClick={()=>window.open("https://csi.coep.org.in/")}>VISIT WEBSITE</button>
        
      </div>
    </div>
  </div>
</div>
</section>
    </div>
  )
}
