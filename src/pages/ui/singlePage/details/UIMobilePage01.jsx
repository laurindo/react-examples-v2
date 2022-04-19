import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import React from "react";
import ADSSection from "../../../section/AdsSection";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 40,
    paddingTop: 100
  },
  title: {
    color: "#D6D4DB"
  },
  media: {
    height: 0,
    padding: "56.25%"
  },
  example: {
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 20,
    boxShadow: "#e219c7 0px 1px 11px 0px",
    overflow: "hidden"
  },
  bread: {
    color: "#9863af",
    fontSize: "12px"
  },
  breadCurrent: {
    color: "#9863af",
    fontSize: "12px",
    fontWeight: "bold"
  }
}));

function UIMobilePage01(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <Breadcrumbs aria-label="breadcrumb" classes={{root: classes.bread}}>
            <Link color="inherit" href="/">Home</Link>
            <Link color="inherit" href="#/ui/single-pages">Single Pages</Link>
            <Link color="inherit" href="#/ui/single-pages/mobile">Mobile Pages</Link>
            <Typography classes={{root: classes.breadCurrent}} onClick={() => props.history.back()}>Model 01</Typography>
          </Breadcrumbs>

          <h1 className={classes.title}>Delivery Food</h1>
          <h3 className={classes.title}>Model 01</h3>
          <div id="content">
            <iframe
              src="https://codesandbox.io/embed/single-page-fm8h2?fontsize=14&hidenavigation=1&theme=dark"
              style={{"width":"100%", "height":"1000px", "border":0, "border-radius": "4px", "overflow":"hidden"}}
              title="single-page"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>

        </Grid>
        <ADSSection/>
      </Grid>
      <p>Tags: #delivery-food #food-delivery #ui #design #layout #single-page #inspiration #react #components</p>
    </div>
  );
}

export default withWidth()(UIMobilePage01);
