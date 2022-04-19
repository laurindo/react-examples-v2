import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import React from "react";
import Button from "../components/button/Button";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#090d40"
  },
  msg: {
    position: "absolute",
    top: 100,
    width: "100%",
    textAlign: "center",
    color: "#fff"
  },
  button: {
    margin: "20px 0",
  }
}));

function NotFoundPage(props) {
  const classes = useStyles();
  return (
    <Grid item justify="center" alignItems="center" className={classes.grid}>
      <img src="https://res.cloudinary.com/luneswallet/image/upload/v1593611464/react-examples/maintenance.png" alt="under maintenance"/>
      <div className={classes.msg}>
        <h1>Good things are on the way</h1>
        <p>Our site is improving all content and soon we'll update our content. Thanks, you are our motivation!!!</p>
        <Button className={classes.button} onClick={() => props.history.push("/")}>Go Home</Button>
      </div>
    </Grid>
  );
}

export default withWidth()(NotFoundPage);
