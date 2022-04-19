import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import React, {useEffect} from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 5,
    padding: "10px 20px",
    backgroundColor: "#442c4f",
    height: "100vh"
  },
  grid: {
    height: "100vh",
    zIndex: 10
  },
  ads: {
    margin: "10px 0",
    cursor: "pointer"
  },
  title: {
    padding: "5px 10px",
    color: "#7d7d7d"
  },
  titleAds: {
    color: "#fff",
    padding: "2px 10px",
    borderRadius: "5px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
}));

const links = [{
  description: "Dribbble is the world’s leading community for creatives to share, grow, and get hired.",
  link: "https://dribbble.com/",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593744103/react-examples/dribbble.jpg"
}, {
  description: "A JavaScript library for building user interfaces",
  link: "https://reactjs.org/",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593745091/react-examples/react-logo.jpg"
}, {
  description: "Everything you need to get creative projects done",
  link: "https://themeforest.net/category/ui-templates",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593745418/react-examples/theme-forest.png"
}];

function AdsSection() {
  const classes = useStyles();
  useEffect(() => {}, []);
  return (
    <Grid item xs={12} lg={3} className={classes.grid}>
      <div className={classes.container}>
        <h3 className={classes.titleAds}>You might also like... (ADS)</h3>
        <Grid container>
          {links.map((l, i) => (
            <Grid key={i} item xs={12} className={classes.ads} onClick={() => window.open(l.link, "_blank")}>
              <Card key={i}>
                <CardMedia
                  image={l.cover}
                  className={classes.media}
                />
                <Typography className={classes.title}>{l.description}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  );
}

export default withWidth()(AdsSection);
