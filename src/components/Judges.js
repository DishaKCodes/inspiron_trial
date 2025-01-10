import { Grid } from "@material-ui/core";
import React from "react";

import abhijit from "../images/judges/abhijit.png";
import aman_goyal from "../images/judges/aman_goyal.png";
import arpit from "../images/judges/arpit.png";
import sk from "../images/judges/sk.png";

export default function Registration() {
  return (
    <div style={{ minHeight: "65vh" }}>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center"></div>

          <div
            className="title titsponsorhead"
            style={{ marginBottom: "3rem" }}
          >
            JUDGES
          </div>
          {/* <h2
            class="text-2xl tracking-widest text-merriweather text-bold font-medium title-font mb-4"
            style={{ color: "#fff", "margin-top": "3em" }}
          >
            TO BE A
            NNOUNCED...
          </h2> */}
          <center>
            <Grid container justify="center" direction="row" spacing={3}>
              <Grid item xs={12} md={6} sm={12}>
                <img className="judges-image" alt="abhijit" src={abhijit} />
              </Grid>
              <Grid item xs={12} md={6} sm={12}>
                <img
                  className="judges-image"
                  alt="aman goyal"
                  src={aman_goyal}
                />
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              direction="row"
              style={{ marginTop: "2rem" }}
              spacing={5}
            >
              <Grid item xs={12} md={6} sm={12}>
                <img alt="arpit" src={arpit} className="judges-image" />
              </Grid>
              <Grid item xs={12} md={6} sm={12}>
                <img alt="sk" src={sk} className="judges-image" />
              </Grid>
            </Grid>
          </center>
        </div>

        {/* <div class="container px-5 py-24 mx-auto flex flex-wrap mb-20">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden" >
      <img alt="feature" class="object-cover object-center h-full w-full regimg" src="https://wallpaperaccess.com/full/1158931.jpg"/>
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center" >
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
        <img src="https://cdn-icons-png.flaticon.com/512/4210/4210941.png" alt="" />
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3 text-merriweather">REGISTER FOR INSPIRON 23</h2>
          
          
          <button className='btn1 text-lato text-bold'>CLICK HERE</button>
          
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center" >
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
        <img src="https://cdn-icons-png.flaticon.com/512/4210/4210941.png" alt="" />
        </div>
        <div class="flex-grow" >
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3 text-merriweather">DOWNLOAD PITCH DECK TEMPLATE</h2>
          
          <button className='btn1 text-lato text-bold'>CLICK HERE</button>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center" >
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <img src="https://cdn-icons-png.flaticon.com/512/4210/4210941.png" alt="" />
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3 text-merriweather">SUBMIT PITCH DECK</h2>
          
          <button className='btn1 text-lato text-bold'>CLICK HERE</button>
        </div>
      </div>
    </div>
  </div>*/}
      </section>
    </div>
  );
}
