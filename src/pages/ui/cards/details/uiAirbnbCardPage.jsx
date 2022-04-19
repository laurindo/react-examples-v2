import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import React, {useEffect} from "react";
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

function UIAirbnbCardPage(props) {
  const classes = useStyles();

  useEffect(() => {
    const el = document.querySelector("#content");
    const script = document.createElement('script');
    script.src = "//jsfiddle.net/dslaurindo/Lqmd9c2g/3/embed/js,html,css,result/dark/";
    script.async = true;
    el.appendChild(script);

    const el2 = document.querySelector("#content2");
    const script2 = document.createElement('script');
    script2.src = "//jsfiddle.net/dslaurindo/dr2eLm8x/61/embed/js,html,css,result/dark/";
    script2.async = true;
    el2.appendChild(script2);

    return () => {
      el.removeChild(script);
      el2.removeChild(script2);
    }
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <Breadcrumbs aria-label="breadcrumb" classes={{root: classes.bread}}>
            <Link color="inherit" href="/">Home</Link>
            <Link color="inherit" href="#/ui/cards">Cards</Link>
            <Typography classes={{root: classes.breadCurrent}} onClick={() => props.history.back()}>Airbnb Card</Typography>
          </Breadcrumbs>
          <h1 className={classes.title}>Airbnb Cards</h1>
          <p className={classes.title}>You will learn how to create this awesome Cards</p>


          <h3 className={classes.title}>Model 01</h3>
          <div className={classes.example}>
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1593604106/react-examples/cards-airbnb2.png" alt="example airbnb card"/>
          </div>
          <div id="content"></div>

          <hr/>

          <h3 className={classes.title}>Model 02</h3>
          <div className={classes.example}>
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1593608447/react-examples/airbnb-cards03.png" alt="example airbnb card model 02"/>
          </div>
          <div id="content2"></div>

        </Grid>
        <ADSSection/>
      </Grid>
    </div>
  );
}

export default withWidth()(UIAirbnbCardPage);
