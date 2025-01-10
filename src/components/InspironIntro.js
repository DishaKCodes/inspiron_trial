import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "../index.css";
import DevfolioButton from "./DevfolioButton";
import {Button} from "@material-ui/core";
import { useGlitch } from 'react-powerglitch'
// ..
AOS.init();
export default function InspironIntro() {
  const Glitch = useGlitch();
  
 useEffect(() => {



    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      
      document.body.removeChild(script);
    };


  }, []);
  return (
    <div className="intro">
      <section class="text-gray-600 body-font">
        <div class="flex flex-wrap w-full flex-col items-center text-center"></div>
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-5">
            <h2
              class="text-2xl tracking-widest font-medium title-font mb-4"
              style={{ color: "#fff", "margin-top": "3em" }}
            >
              <span ref={Glitch.ref}>CSI COEP TECH STUDENT CHAPTER</span>
            </h2>
            <h2
              class="text-2xl tracking-widest font-medium title-font mb-4"
              style={{ color: "#fff", "margin-top": "1Em" }}
            >
              PRESENTS
            </h2>
            {/* <h1 class="myhead sm:text-3xl text-2xl font-medium title-font text-gray-900">INSPIRON '23</h1> */}
            <div class="wrapper">
              {/* <div class="static-txt">I'm a</div> */}
              <ul>
                <div class="myhead py - 5 title-font text-gray-900">
                  <li class="line-1 anim-typewriter">
                   <span style={{color: "white",fontWeight: "bold"}}>INSPIRON'24</span>
                  </li>
                </div>
                {/* <li><span>Designer</span></li>
      <li><span>Developer</span></li>
      <li><span>Freelancer</span></li> */}
              </ul>
            </div>
          </div>
<DevfolioButton class="glitch-click" />
<center>
<Button variant="contained" class="glitch-click" style={{backgroundColor:"black",color:"white",fontSize:"1rem",width:"312px",height:"44px",fontWeight:"bold",textTransform:"capitalize",marginBottom:"2%"}} onClick={()=>window.open("https://discord.com/invite/Rcc9gNWFuE")}>Join Discord</Button>
</center>
          <div class="flex flex-wrap " >
            <div class="dibba boxes p-4 md:w-1/3" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="100" id="dibba3">
              <div class="glitch-hover intro-part flex rounded-lg h-full p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  
                  <h2 class="glitch__title text-gray-900 text-lg title-font font-medium">
                    THINK
                  </h2>
                </div>
                <div class="flex-grow">
             
                  <p class="leading-relaxed text-base text-montserrat text-bold">
                    Brainstorm your solutions. &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div class="dibba boxes p-4 md:w-1/3" data-aos="zoom-in-up"  id="dibba3">
              <div class="glitch-hover intro-part flex rounded-lg h-full p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    CODE
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-montserrat text-bold">
                    Convert your thoughts to syntax.
                  </p>
                </div>
              </div>
            </div>
            <div class="dibba boxes p-4 md:w-1/3" data-aos="fade-up-left"  id="dibba3">
              <div class="glitch-hover intro-part flex rounded-lg h-full p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    INNOVATE
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-montserrat text-bold">
                    Design solutions to modern day problems.
                  </p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>
      {/* <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script> */}
    </div>
  );
}
