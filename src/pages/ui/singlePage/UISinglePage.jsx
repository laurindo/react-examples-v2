import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader";
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
    cursor: "pointer"
  },
  title: {
    color: "#D6D4DB"
  },
  media: {
    height: 0,
    padding: "24.25%"
  },
  ads: {
    backgroundColor: "#fff",
    borderRadius: 5,
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
  subtTitle: "Fight Covid - App",
  url: "/ui/single-pages/covid",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594560822/react-examples/fight-covid-app.png"
}, {
  subtTitle: "Delivery Food Examples",
  url: "/ui/single-pages/delivery-food",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593909378/react-examples/delivery-food.png"
}, {
  subtTitle: "Mobile Examples",
  url: "/ui/single-pages/mobile",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594131215/react-examples/mobile-example.gif"
}];

function UISinglePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <Breadcrumbs aria-label="breadcrumb" classes={{root: classes.bread}}>
            <Link color="inherit" href="/">Home</Link>
            <Typography classes={{root: classes.breadCurrent}} onClick={() => props.history.back()}>UI Single Pages</Typography>
          </Breadcrumbs>
          <h3 className={classes.title}>UI Single Pages</h3>
          <Grid container spacing={2}>
            {lists.map((c, i) => (
              <Grid item lg={4} key={i}>
                <Card classes={{root: classes.card}} onClick={() => props.history.push(c.url)}>
                  <CardHeader title={c.name} subheader={c.subtTitle}/>
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

export default withWidth()(UISinglePage);
