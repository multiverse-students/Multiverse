import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homepageWrapper: {
    width: "100%",
    display: "grid",
    margin: "0 auto",
    gridTemplateColumns: "0.5fr 1fr 0.5fr",
    padding: "0 15px",
    maxWidth: "1440px",
  },
  feed: {},
  newPostWrapper: {
    width: "100%",
    height: "100px",
    background: "lightgray",
    borderRadius: "10px",
  },
}));

function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.homepageWrapper}>
      <div></div>
      <div className={classes.feed}>
        <div className={classes.newPostWrapper}></div>
      </div>
      <div></div>
    </div>
  );
}

export default Homepage;
