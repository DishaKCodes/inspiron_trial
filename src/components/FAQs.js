import React from "react";
import {
  makeStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import comp from "./faq";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    marginTop: "5rem",
    width: "100vw",
  },
  headingRoot: {
    position: "relative",
    padding: "2em 0",
    marginTop: "5em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
  title: {
    position: "relative",
    marginBottom: "20px",
    paddingBottom: "0",
    fontSize: theme.typography.pxToRem(32),
    fontWeight: theme.typography.fontWeightBold,
    color: "#ffffff",
    textTransform: "uppercase",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      textShadow: "2px 3px #865c5c",
    },
  },
  backSplash: {
    position: "absolute",
    top: "30px",
    left: "0",
    right: "0",
    fontSize: "3em",
    fontWeight: "700",
    color: "#4a739760",
    textTransform: "uppercase",
    zIndex: "1",
    lineHeight: "0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  expansionHeading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#0056b3",
  },
  number: {
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.typography.pxToRem(10),
    flexShrink: 0,
    color: "#e83e8c",
  },
}));

export default function FAQPage() {
  const classes = useStyles();
  return (
    <main>
      <center>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center"></div>

            <div
              className="title titsponsorhead"
              style={{ marginBottom: "3rem" }}
            >
              FAQS
            </div>
            {comp.map((el, i) => {
              let id = i + 1;
              return (
                <ExpansionPanel
                  style={{
                    backgroundColor: "#000",
                    textAlign: "left",
                    width: "80%",
                    background: "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "saturate(180%) blur(10px)"
                  }}
                  className="mt-1 mb-3"
                  id="faqBox"
                  key={`comp-faq-${i}`}
                >
                  <ExpansionPanelSummary
                    expandIcon={
                      <ExpandMoreIcon color="secondary" fontSize="large" />
                    }
                    aria-controls={`answer-${id}`}
                    id={`question-${id}`}
                    style={{ color: "#ccc" }}
                  >
                    <Typography className={classes.number} style={{ color: "#6977d3"}}>
                      {id < 10 ? id : id}
                    </Typography>
                    <Typography className={classes.heading}>
                      {el.question}
                    </Typography>
                  </ExpansionPanelSummary>
                  <hr style={{ boxShadow: "0 0 4px #ccc" }} />
                  <ExpansionPanelDetails>
                    <Typography style={{ color: "#ccc" }}>
                      {el.answer}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              );
            })}
          </div>
        </section>
      </center>
    </main>
  );
}
