import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import inspiron from "../images/inspiron.png";
// ..
import AnimateText from '@moxy/react-animate-text';
AOS.init();
export default function About() {
  
  return (
    <div >
      <section class="text-gray-600 body-font ">
      

        <div class=" container px-5 py-24 mx-auto flex flex-col">
          
          <div class="abtcontainer lg:w-4/6 mx-auto">

            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="rounded-full inline-flex items-center justify-center text-gray-400">
                  <img style={{ height:"60%",width:"80%"}} src={inspiron} alt="" />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">CSI COEP</h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <h1 class="leading-relaxed abouttxt">ABOUT INSPIRON 2023</h1>
                </div>
              </div>
              <div data-aos="fade-left" class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg text-montserrat text-semibold mb-4">
                  <h1 class="abthead text-merriweather text-bold">
                   About Inspiron</h1> <AnimateText initialDelay={ 3 } wordDelay={ 0.5 }>Computer Society of India, COEP Tech Student Chapter is thrilled to announce the much-awaited
arrival of Inspiron ‘23, National Level Hackathon, in association with Devfolio and Polygon
Technology.
Inspiron'23 is a 24-hour hackathon that will take place on the 24th and 25th of March 2023.
This year, we provide you with the opportunity to present a project in any one of 5 exciting domains: IOT, Blockchain, Machine Learning and Web
Development.
We invite all innovators to transform their ideas into reality. Be sure to register and join our
discord server!
Team Size: 1-4 Members
Registrations are open for all college students from all branches free of cost!</AnimateText>
</p>
                  <button className='glitch-click btn1 text-lato text-bold' onClick={()=>window.open("https://drive.google.com/file/d/1LlU-a8JUYgvQOeXDi3xjwoJ33ucKxDlD/view?usp=sharing")}>Download Brochure</button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
