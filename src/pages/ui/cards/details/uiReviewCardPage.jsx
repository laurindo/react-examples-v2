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
    boxShadow: "#e219c7 0px 1px 11px 0px"
  },
  bread: {
    color: "#fff"
  },
  breadCurrent: {
    color: "#01CACF"
  }
}));

function UIReviewCardPage(props) {
  const classes = useStyles();

  useEffect(() => {
    const el = document.querySelector("#content");
    const script = document.createElement('script');
    script.src = "//jsfiddle.net/dslaurindo/4y8jz2sg/7/embed/js,html,css,result/dark/";
    script.async = true;
    el.appendChild(script);
    return () => el.removeChild(script)
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <Breadcrumbs aria-label="breadcrumb" classes={{root: classes.bread}}>
            <Link color="inherit" href="/">Home</Link>
            <Link color="inherit" href="#/ui/cards">Cards</Link>
            <Typography classes={{root: classes.breadCurrent}} onClick={() => props.history.back()}>Simple Card</Typography>
          </Breadcrumbs>
          <h1 className={classes.title}>Review Card</h1>
          <p className={classes.title}>You will learn how to create this awesome Card</p>
          <div className={classes.example}>
            <img src="https://res.cloudinary.com/luneswallet/image/upload/v1593692569/react-examples/review-card.png.png" alt="example review card"/>
          </div>
          <div id="content"></div>
        </Grid>
        <ADSSection/>
      </Grid>
    </div>
  );
}

export default withWidth()(UIReviewCardPage);
