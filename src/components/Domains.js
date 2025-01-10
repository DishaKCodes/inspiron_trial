import {React,useEffect} from 'react'
import AOS from 'aos' 
import 'aos/dist/aos.css'
import webdev from "../images/web-dev.png"
import ml from "../images/ml.png"
import blockchain from "../images/blockchain.png"
import iot from "../images/iot.png"
import Box, { Typography } from '@material-ui/core';


export default function Domains() {
  useEffect(()=>{
    AOS.init({
      offset: 100, 
      delay: 100, 
      duration: 1000
  
     });
    
     },[]);
  return (
    <div>
      <section class="text-gray-600 body-font">
     
      <div class="flex flex-wrap w-full flex-col items-center text-center">
      <h1 class="font-large title-font  text-gray-900 "  style={{"margin-top": "6em",fontWeight:"bold"}}>** Problem Statements will be released on 21st March 2023. ** </h1>
    
      <h1 class="font-large title-font  text-gray-900 titsponsorhead"  style={{"margin-top": "2em"}}>DOMAINS</h1>
      
    </div>
  
  
  <div class="container px-5 py-24 mx-auto">
 
    
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" >
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img src={webdev} alt="" className='myimg'/>
        
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2 text-merriweather text-bold">Web Development</h2>
        <p class="leading-relaxed text-base text-montserrat text-semibold">Web development is the process of building and maintaining a website for the Internet or an intranet that is accessed through a web browser and hosted on a server, either on on-premises hardware or in the cloud.</p>
        {/* <p class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </p> */}
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" >
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2 text-merriweather text-bold">Machine Learning</h2>
        <p class="leading-relaxed text-base text-montserrat text-semibold">Machine Learning (ML) is a subset of Artificial Intelligence. ML is a science of designing and applying algorithms that are able to learn things from past cases.</p>
        {/* <p class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </p> */}
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img src={ml} alt="" className='myimg'/>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" >
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img src={blockchain} alt="" className='myimg'/>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2 text-merriweather text-bold">Block Chain</h2>
        <p class="leading-relaxed text-base text-montserrat text-semibold">A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.</p>
        {/* <p class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </p> */}
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" >
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2 text-merriweather text-bold">IOT</h2>
        <p class="leading-relaxed text-base text-montserrat text-semibold">The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.</p>
        {/* <p class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </p> */}
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img src={iot} alt="" className='myimg'/>
      </div>
    </div>
    
    
  </div>
</section>
    </div>
  )
}
