import React from "react";
import replit from "../images/replit.png";
import solana from "../images/solanaLogo.png";
import filecoin from "../images/filecoin.png";
import polygon from "../images/polygon.png";
import devfolio from "../images/devfolio.png";
import uptiq from "../images/uptiq2.png";
import smv from "../images/smvLogo.png";
import { Grid } from "@material-ui/core";
export default function Sponsors() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center"></div>

          <div
            className="title titsponsorhead"
            style={{ marginBottom: "3rem" }}
          >
            TITLE SPONSORS
          </div>
          <center>
            <Grid container justify="center" direction="row" spacing={5}>
              <Grid item xs={12} md={6} sm={12}>
                <img alt="devfolio" src={devfolio} />
              </Grid>
              <Grid item xs={12} md={6} sm={12}>
                <img alt="polygon" src={polygon} />
              </Grid>
            </Grid>
          </center>
          <div
            className="title titsponsorhead"
            style={{ marginTop: "6rem", marginBottom: "4rem" }}
          >
            ASSOCIATE SPONSORS
          </div>
          <center>
          <Grid container justify="center" direction="row" spacing={5}>
              <Grid item xs={12} md={6} sm={12}>
                <img src={uptiq} alt="uptiq"></img>
              </Grid>
              <Grid item xs={12} md={6} sm={12}>
                <img alt="stampmyvisa" src={smv} />
              </Grid>
            </Grid>
          </center>
          <div
            className="title titsponsorhead"
            style={{ marginTop: "6rem", marginBottom: "4rem" }}
          >
            IMMEDIATE SPONSORS
          </div>
          <center>
            <Grid container justify="center" direction="row" spacing={5}>
              <Grid item xs={12} md={4} sm={12}>
                <img alt="replit" src={replit} />
              </Grid>

              <Grid item xs={12} md={4} sm={12}>
                <img alt="filecoin" src={filecoin} />
              </Grid>
              <Grid item xs={12} md={4} sm={12} style={{ marginTop: "10px" }}>
                <img alt="solana" src={solana} />
              </Grid>
            </Grid>
          </center>

          {/*<h2 class="text-2xl tracking-widest text-merriweather text-bold font-medium title-font mb-4" style={{"color": "#fff", "margin-top": "3em"}}>TO BE DECIDED...</h2>*/}
          {/* <div class="flex flex-wrap -m-4 sponsordiv">
    
      <div class="xl:w-1/3 md:w-1/2 p-4 ">
        <p class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={logo1} />
        </p>
        <div class="mt-4">
          
          <h2 class="text-gray-900 title-font text-lg font-medium text-montserrat text-bold">The Catalyzer</h2>
          
        </div>
      </div>
      
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <p class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
        </p>
        <div class="mt-4">
          
          <h2 class="text-gray-900 title-font text-lg font-medium text-montserrat text-bold">The Catalyzer</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <p class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
        </p>
        <div class="mt-4">
          
          <h2 class="text-gray-900 title-font text-lg font-medium text-montserrat text-bold">Shooting Stars</h2>
          
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <p class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"/>
        </p>
        <div class="mt-4">
          
          <h2 class="text-gray-900 title-font text-lg font-medium text-montserrat text-bold">Neptune</h2>
          
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <p class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
        </p>
        <div class="mt-4">
          
          <h2 class="text-gray-900 title-font text-lg font-medium text-montserrat text-bold">The 400 Blows</h2>
          
        </div>
      </div>
  </div>*/}
        </div>
      </section>
    </div>
  );
}
