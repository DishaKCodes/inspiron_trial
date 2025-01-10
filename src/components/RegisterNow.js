import React from 'react'

import { Grid } from "@material-ui/core";
export default function Sponsors() {
  return (
    <div style={{minHeight:"65vh"}}>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">

          </div>

          <div className="title titsponsorhead" style={{ marginBottom: "5rem" }}>REGISTER</div>
          <center>
            <Grid
              container
              direction="row"
              spacing={4}
            >


              <Grid item xs={12} md={4} sm={12}>
                <button className='btn1 text-lato text-bold' onClick={() => window.open("https://inspiron23.devfolio.co/")}>Register For Inspiron'23</button>
              </Grid>
              <Grid item xs={12} md={4} sm={12}>
                <button className='btn1 text-lato text-bold' onClick={() => window.open("https://docs.google.com/presentation/d/1DLwJ74YDoaaEbosAsZDgRRdKVc1l4pqikVoZ3ns_-fo/edit?usp=sharing")}>Download Pitch Deck</button>
              </Grid>
              <Grid item xs={12} md={4} sm={12}>
                <button className='btn1 text-lato text-bold' onClick={() => window.open("https://bit.ly/inspiron2PitchDeck")}>Submit Pitch Deck</button>
              </Grid>


            </Grid>
          </center>
        </div>
      </section>
    </div>
  )
}
