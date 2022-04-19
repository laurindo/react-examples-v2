import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia";
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
  url: "/ui/single-pages/delivery-food/details/01",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593909378/react-examples/delivery-food.png"
}, {
  url: "/ui/single-pages/delivery-food/details/02",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593917848/react-examples/delivery-food-02.png"
}, {
  url: "/ui/single-pages/delivery-food/details/03",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593918266/react-examples/delivery-food-03.png"
}];

function UIDeliveryFoodPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <Breadcrumbs aria-label="breadcrumb" classes={{root: classes.bread}}>
            <Link color="inherit" href="/">Home</Link>
            <Link color="inherit" href="#/ui/single-pages">Single Pages</Link>
            <Typography classes={{root: classes.breadCurrent}} onClick={() => props.history.back()}>Delivery Food Pages</Typography>
          </Breadcrumbs>
          <h3 className={classes.title}>Delivery Food - Single Pages</h3>
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

export default withWidth()(UIDeliveryFoodPage);
