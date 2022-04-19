import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import React from "react";
import ADSSection from "../../section/AdsSection";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 40,
    paddingTop: 100
  },
  card: {
    cursor: "pointer",
    borderRadius: 8
  },
  title: {
    color: "#D6D4DB"
  },
  media: {
    height: 0,
    padding: "44.25%",
    borderRadius: 10
  },
  ads: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5
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

const lists = [{
  url: "/ui/single-pages/mobile/details/03",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594214210/react-examples/google-play-mobile-cards.png"
}, {
  url: "/ui/single-pages/mobile/details/01",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594132130/react-examples/mobile-01.png"
}, {
  url: "/ui/single-pages/mobile/details/02",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594131745/react-examples/mobile-google-now.png.png"
}];

function UIMobilePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <Breadcrumbs aria-label="breadcrumb" classes={{root: classes.bread}}>
            <Link color="inherit" href="/">Home</Link>
            <Link color="inherit" href="#/ui/single-pages">Single Pages</Link>
            <Typography classes={{root: classes.breadCurrent}} onClick={() => props.history.back()}>Mobile Pages</Typography>
          </Breadcrumbs>
          <h3 className={classes.title}>Mobile - Single Pages</h3>
          <Grid container spacing={2}>
            {lists.map((c, i) => (
              <Grid item lg={4} key={i}>
                <Card classes={{root: classes.card}} onClick={() => props.history.push(c.url)}>
                  <CardMedia
                    image={c.cover}
                    className={classes.media}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <ADSSection/>
      </Grid>
    </div>
  );
}

export default withWidth()(UIMobilePage);
