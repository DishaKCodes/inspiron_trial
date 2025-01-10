import { React, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Timeline() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
   
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
    <h1 class=" font-large title-font mb-2 text-gray-900 titsponsorhead" style={{marginTop:"4rem",marginBottom:"0"}}>
        TIMELINE
      
      </h1>
      </div>
   
       
      
  
      <div class="timer">
      <VerticalTimeline >
        <VerticalTimelineElement
         
          className="vertical-timeline-element--work time"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "saturate(180%) blur(10px)",
            color: "white",
          }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          iconStyle={{ background: "rgb(2,0,36)", color: "#fff" }}
          date="March-06-2023"
          icon={<FaClock />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontSize:"25px"}}>12:00 am</h3>

          <p class="time-content" style={{fontSize:"20px"}}>
            Registrations start 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         
          className="vertical-timeline-element--work time"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "saturate(180%) blur(10px)",
            color: "white",
          }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          iconStyle={{ background: "rgb(2,0,36)", color: "#fff" }}
          date="March-21-2023"
          icon={<FaClock />}
        >
          <p class="time-content" style={{fontSize:"20px"}}>
          
            Problem Statements will be released at 7:00 pm.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work time"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "saturate(180%) blur(10px)",
            color: "white",
            fontSize:"1rem"
          }}
          date="March-23-2023"
          iconStyle={{ background: "rgb(2,0,36)", color: "#fff"}}
          icon={<FaClock />}
          data-aos="fade-up"
        >
          <p class="time-content" style={{fontSize:"20px"}}>
           Application Deadline has been extended till 12:00 am 23rd March 2023.
          </p>
          <p class="time-content" style={{fontSize:"20px"}}>
            Deadline for submission of pitch deck : 7:00 pm
          </p>
         
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "saturate(180%) blur(10px)",
            color: "white",
          }}
          className="vertical-timeline-element--work time"
          date="March-24-2023"
          iconStyle={{ background: "rgb(2,0,36)", color: "#fff" }}
          icon={<FaClock />}
        >
         
          <h3 className="vertical-timeline-element-title" style={{fontSize:"25px"}}>9:00 am</h3>

          <p class="time-content" style={{fontSize:"20px"}}>Opening Ceremony and announcement of shortlisted teams</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "saturate(180%) blur(10px)",
            color: "white",
          }}
          className="vertical-timeline-element--education time"
          date="March-24-2023"
          iconStyle={{ background: "rgb(2,0,36)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontSize:"25px"}}>10:00 am</h3>

          <p class="time-content" style={{fontSize:"20px"}}>Coding starts</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "saturate(180%) blur(10px)",
            color: "white",
          }}
          className="vertical-timeline-element--education time"
          date="March-25-2023"
          iconStyle={{ background: "rgb(2,0,36)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontSize:"25px"}}>11:30 am</h3>

          <p class="time-content" style={{fontSize:"20px"}}>Final Submission of project</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "saturate(180%) blur(10px)",
            color: "white",
          }}
          className="vertical-timeline-element--education time"
          date="March-25-2023"
          iconStyle={{ background: "rgb(2,0,36)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontSize:"25px"}}>12:00 pm</h3>

          <p class="time-content" style={{fontSize:"20px"}}>Judging Round begins </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "saturate(180%) blur(10px)",
            color: "white",
          }}
          className="vertical-timeline-element--education time"
          date="March-27-2023"
          iconStyle={{ background: "rgb(2,0,36)", color: "#fff" }}
          icon={<FaClock />}
        >
          <h3 className="vertical-timeline-element-title" style={{fontSize:"25px"}}>6:30 pm</h3>

          <p class="time-content" style={{fontSize:"20px"}}>Closing Ceremony and Winner Declaration</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
     
     
    </>
  );
}
