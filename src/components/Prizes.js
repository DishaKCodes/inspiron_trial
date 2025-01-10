import React from "react";
import { useEffect } from 'react';
import firstprize from "../images/gold.png";
import secondprize from "../images/silver.png";
import thirdprize from "../images/bronze.png";
import medal from "../images/medal.png";
import domains from "../images/trophy.png";
import hackathon_bg from "../images/bg.png";
import Grid from '@mui/material/Grid';
import './prizes.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


export default function Prizes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${hackathon_bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        minWidth: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="App">
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center mb-20">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                  {/* <h1 className="font-large title-font mb-2 text-gray-900 titsponsorhead" style={{ marginTop: "3rem" }}>
                  PRIZES
                </h1> */}
                  <h1 className="mint">PRIZES</h1>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.7rem", color: "white", marginBottom: "8%" }}>
                  Total Prizes worth ₹50000+
                </p>
                <center>
                  <Grid container justify="center" direction="row">
                    <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                      <div  id="second" className="glass-card" style={{ marginTop: "30px" }}>
                        <img style={{ height: "auto", width: "192px" }} alt="replit" src={secondprize} className="card-image" />
                        <h2 className="card-caption">SECOND PLACE</h2>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                      <div  id="first" className="glass-card" style={{ marginTop: "30px" }}>
                        <img style={{ height: "auto", width: "192px" }} alt="filecoin" src={firstprize} className="card-image" />
                        <h2 className="card-caption">FIRST PLACE</h2>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                      <div  id="third" className="glass-card" style={{ marginTop: "30px" }}>
                        <img style={{ height: "auto", width: "192px" }} alt="solana" src={thirdprize} className="card-image" />
                        <h2 className="card-caption">THIRD PLACE</h2>
                      </div>
                    </Grid>
                  </Grid>
                </center>
              </div>
            </div>

            <div>
              {/*  <div class="p-4 md:w-1/3 flex flex-col text-center items-center" style={{marginTop:"2rem"}}>
                            <img src={medal} alt="" className='myprize2' />
                            <div class="flex-grow text-bold">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3 text-merriweather">BEST UI</h2>
                                <center>
                                <p class="leading-relaxed text-base text-montserrat text-semibold" style={{width:"70%"}}>The team with the Best UI will receive certificates and Exciting Schwags.</p>
                                </center>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center" style={{marginTop:"2rem"}}>
                            <img src={domains} alt="" className='myprize2' style={{height:"250px",weight:"1000px" }} />
                            <div class="flex-grow text-bold">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3 text-merriweather" style={{visibility:"hidden"}}>BEST shdfjfjfdsjfdbj</h2>
                                <p class="leading-relaxed text-base text-montserrat text-semibold">Domain Prizes worth ₹20000.</p>
                                
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center" style={{marginTop:"2rem"}}>
                            <img src={medal} alt="" className='myprize2'  />
                            <div class="flex-grow text-bold">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3 text-merriweather">BEST PITCH</h2>
                                <center>
                                <p class="leading-relaxed text-base text-montserrat text-semibold" style={{width:"75%"}}>The team with the Best Pitch will receive certificates and Exciting Schwags.</p>
                                </center>
                            </div>
                        </div>

                        
                       <div></div>

                       
                       {/* <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
                            <img src={medal} alt="" className='myprize2' />
                            <div class="flex-grow text-bold">
                               
                                <center>
                                <p class="leading-relaxed text-base text-montserrat text-semibold" style={{width:"60%"}} >Best hack built on Ethereum: $150</p>
                                <p class="leading-relaxed text-base text-montserrat text-semibold" style={{visibility:"hidden",width:"70%"}} >The second runner-up team will receive a cash prize of ₹5,000 & Exciting Schwags </p>
                                
                                </center>
                            </div>
                        </div>
                       
                        <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
                            <img src={medal} alt="" className='myprize2' />
                            <div class="flex-grow text-bold">
                               
                                <center>
                                <p class="leading-relaxed text-base text-montserrat text-semibold" style={{width:"75%"}}>Best hack built on Ethereum + Polygon: $200</p>
                                </center>
                            </div>
    </div>*/}
            </div>

            <div className="container-2 px-5 py-24 mx-auto">
              <div className="text-center mb-20">
              <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                  {/* <h1 className="font-large title-font mb-2 text-gray-900 titsponsorhead" style={{ marginTop: "3rem" }}>
                  PRIZES
                </h1> */}
                  <h1 class="mint">PRIZES</h1>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "1.7rem", color: "white", marginBottom: "8%" }}>
                  Total Prizes worth ₹50000+
                </p>
                <center>
                  <Grid container justify="center" direction="row">

                    <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                      <div data-aos="zoom-in" data-aos-duration="2000" id="first" className="glass-card" style={{ marginTop: "30px" }}>
                        <img style={{ height: "auto", width: "192px" }} alt="filecoin" src={firstprize} className="card-image" />
                        <h2 className="card-caption">FIRST PLACE</h2>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                      <div data-aos="zoom-in" data-aos-duration="2000" id="second" className="glass-card" style={{ marginTop: "30px" }}>
                        <img style={{ height: "auto", width: "192px" }} alt="replit" src={secondprize} className="card-image" />
                        <h2 className="card-caption">SECOND PLACE</h2>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                      <div data-aos="zoom-in" data-aos-duration="2000" id="third" className="glass-card" style={{ marginTop: "30px" }}>
                        <img style={{ height: "auto", width: "192px" }} alt="solana" src={thirdprize} className="card-image" />
                        <h2 className="card-caption">THIRD PLACE</h2>
                      </div>
                    </Grid>
                  </Grid>
                </center>
              </div>

            </div>
            <center>
              <Grid container justify="center" direction="row">
                <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                  <div data-aos="fade-right" data-aos-duration="2000" className="glass-card" style={{ marginTop: "30px" }}>
                    <img style={{ height: "auto", width: "192px" }} alt="medal" src={medal} className="card-image" />
                    <h2 className="card-caption">BEST PITCH</h2>
                  </div>
                </Grid>

                <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                  <div data-aos="fade-up" data-aos-duration="2000" className="glass-card" style={{ marginTop: "30px" }}>
                    <img style={{ height: "auto", width: "192px" }} alt="domains" src={domains} className="card-image" />
                    <h2 className="card-caption">DOMAIN PRIZES</h2>
                  </div>
                </Grid>
                <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                  <div data-aos="fade-left" data-aos-duration="2000" className="glass-card" style={{ marginTop: "30px" }}>
                    <img style={{ height: "auto", width: "192px" }} alt="medal" src={medal} className="card-image" />
                    <h2 className="card-caption">BEST UI</h2>
                  </div>
                </Grid>
              </Grid>
            </center>

            <center>
              <hr
                style={{
                  height: "7px",
                  color: "white",
                  width: "70%",
                  textAlign: "center",
                  paddingRight: "5%",
                }}
              ></hr>
            </center>
            <center>
              <h5
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  fontFamily: "Merriweather, sans-serif",
                  color: "white",
                  textShadow:
                    " #6977d3 0px 0px 5px, #6977d3 0px 0px 10px, #6977d3 0px 0px 20px, #6977d3 0px 0px 40px, #da1c5c 0px 0px 60px",
                }}
              >
                OTHER PRIZES FROM ETHEREUM AND POLYGON
              </h5>

              <div style={{ marginTop: "8%" }}>
                <Grid class="grid_of_2" container justify="space between" direction="row">
                  <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                    <div data-aos="fade-right" data-aos-duration="2000" className="glass-card" style={{ marginTop: "30px" }}>
                      <img style={{ height: "auto", width: "192px" }} alt="medal" src={medal} className="card-image" />
                      <h2 className="card-caption">BEST HACK BUILT ON ETHERIUM</h2>
                      {/* <p className="card-caption-text">
                        The second runner-up team will receive a cash prize of ₹5,000 & Exciting Schwags
                      </p> */}
                    </div>
                  </Grid>

                  <Grid item xs={12} md={4} sm={4} style={{ marginBottom: "8%" }}>
                    <div data-aos="fade-left" data-aos-duration="2000" className="glass-card" style={{ marginTop: "30px" }}>
                      <img style={{ height: "auto", width: "192px" }} alt="medal" src={medal} className="card-image" />
                      <h2 className="card-caption">BEST HACK BUILT ON ETHERIUM AND POLYGON</h2>
                      {/* <p className="card-caption-text">
                        The second runner-up team will receive a cash prize of ₹5,000 & Exciting Schwags
                      </p> */}
                    </div>
                  </Grid>
                </Grid>
              </div>
            </center>
            <center>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  color: "white",
                  marginBottom: "8%",
                }}
              >
                Total Prizes worth ₹50000+
              </p>
            </center>
          </section>
        </div>
      </div>
    </div>
  );
}



