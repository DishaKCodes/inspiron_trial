import React, { Component } from "react";
import "./Footer.css";

import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  
 
} from "react-icons/fa";




import { Typography, Grid } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <div style={{borderTop:"5px white", minHeight:"35vh"}} className="glass">
        
        <footer>
          <Grid
            container
            direction="row"
            style={{ Height: "350px" }}
          >
            <Grid item md={5} sm={12}>
              <div
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              >


                <h2
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    fontSize:"2rem"
                  }}
                  className="about-heading"
                >
                  About Us
                </h2>
                <Typography
                  paragraph={true}
                  style={{
                    color: "grey",
                    marginTop: "1rem",
                    textAlign: "justify",
                  }}
                >
                  The Computer Society of India (CSI) Student Chapter of College
                  of Engineering Pune (COEP), established in October 2018 is an
                  active student organization which organizes a number of
                  technical activities including workshops, competitions,
                  technical symposiums, guest lectures etc. for its student
                  members. Under the guidance of Department of Computer
                  Engineering and Information Technology COEP, the student
                  chapter has over 300 members, and is run by a Core Team and
                  faculty from the department.
                </Typography>
              </div>
            </Grid>



            <Grid item xs={6} md={3} sm={12}>
              <div
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                }}
              >
                <h2
                  style={{
                    color: "white",
                    fontSize:"2rem"
                  }}
                >
                  Quick Links
                </h2>
                <Grid
                  container
                  direction="column"
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <Grid item>
                    <a style={{ color: "grey" }} href="https://csi.coep.org.in/hackathon-23/#/">
                      HOME
                    </a>
                  </Grid>
                  <Grid item>
                    <a style={{ color: "grey" }} href="https://csi.coep.org.in/hackathon-23/#/domains">
                    DOMAINS
                    </a>
                  </Grid>
                  <Grid item>
                    <a style={{ color: "grey" }} href="https://csi.coep.org.in/hackathon-23/#/judges">
                      JUDGES
                    </a>
                  </Grid>
                  <Grid item>
                    <a style={{ color: "grey" }} href="https://csi.coep.org.in/hackathon-23/#/sponsors">
                      SPONSORS
                    </a>
                  </Grid>
                  <Grid item>
                    <a style={{ color: "grey" }} href="https://csi.coep.org.in/hackathon-23/#/prizes">
                      PRIZES
                    </a>
                  </Grid>
                 
                  <Grid item>
                    <a style={{ color: "grey" }} href="https://csi.coep.org.in/hackathon-23/#/contact-us">
                      CONTACT
                    </a>
                  </Grid>
                  <Grid item>
                    <a style={{ color: "grey" }} href="https://csi.coep.org.in/hackathon-23/#/register">
                      REGISTER
                    </a>
                  </Grid>
                  <Grid item>
                    <a style={{ color: "grey" }} href="https://csi.coep.org.in/hackathon-23/#/faqs">
                      FAQS
                    </a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            

            <Grid item xs={6} md={3} sm={12} >
              <div
                style={{
                  marginTop: "1rem",
                }}
              >
                <h2
                  style={{
                    color: "white",
                    fontSize:"2rem"
                  }}
                >
                  Contact us
                </h2>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  className="social-links"
                  alignItems="center"
                    justifyContent="center"
                >
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={2}
                    key="facebook"
                    style={{ marginBottom: ".7rem" }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://www.facebook.com/csicoep"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="rotate">
                        <FaFacebook size={36} />
                      </i>
                    </a>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={2}
                    key="linkedin"
                    style={{ marginBottom: ".7rem" }}
                  >
                    <a
                      href="https://in.linkedin.com/company/csi-coep-student-chapter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="rotate">
                        <FaLinkedin size={36} />
                      </i>
                    </a>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={2}
                    key="email"
                    style={{ marginBottom: ".7rem" }}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:csi.comp@coep.ac.in"
                    >
                      <i className="rotate">
                        <FaEnvelope size={36} />
                      </i>
                    </a>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={2}
                    key="instagram"
                    style={{
                      marginBottom: ".7rem",
                    }}

                  >
                    <a
                      href="https://www.instagram.com/csi_coep/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="rotate">
                        <FaInstagram size={36} />
                      </i>
                    </a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>

         

          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ backgroundColor: "black" }}
          >
          
          </Grid>
        </footer>
        
      </div>
    );
  }
}

export default Footer;
