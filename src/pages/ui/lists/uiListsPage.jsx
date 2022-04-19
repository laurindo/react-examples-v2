import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import React from "react";
import ADSSection from "../../section/AdsSection";

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
    padding: "24.25%"
  },
  ads: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5
  }
}));

const lists = [{
  name: "Simple Lists",
  subtTitle: "Learn how to create amazing list cards",
  url: "/ui/lists/simpleList",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593781609/react-examples/simple-list.png"
}];

function UIListsPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <h3 className={classes.title}>UI Lists</h3>
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

export default withWidth()(UIListsPage);
