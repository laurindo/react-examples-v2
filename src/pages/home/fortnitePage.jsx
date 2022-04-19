import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import FortniteAPI from "fortnite-api-io";
import React, {useEffect, useState} from "react";
import {items} from "../../items";

const fortniteAPI = new FortniteAPI("6ccd8b94-7aa51472-f17de77c-d4155578");

const getGames = async () => {
  // return await fortniteAPI.listItems({lang: 'pt-BR'});
  return items;
  // Get the next upcoming items
  // const upcomingItems = await fortniteAPI.listUpcomingItems({lang: 'pt-BR'});
  // Get this seasons challenges
  // const challenges = await fortniteAPI.listChallenges("current", {lang: 'pt-BR'});
  // debugger;
};

const getWeapons = async () => {
  const r = await fortniteAPI.listLoot({lang: 'pt-BR'});
  debugger;
  return r;
};

const useStyles = makeStyles((theme) => ({
  grid: {
    marginBottom: 50,
    padding: 20
  },
  root: {
    textAlign: 'left',
    boxShadow: '#d8d8d8 0px 1px 20px 0px',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '#74aad2 0px 1px 20px 0px',
    }
  },
  mediaRoot: {
    backgroundSize: "contain"
  },
  media: {
    height: 150
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

function HomePage() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [nameItems, setNameItems] = useState([]);
  const [currentItems, setCurrentItem] = useState([]);

  useEffect(() => {
    getGames().then(response => {
      debugger;
      setItems(response.items);
      setNameItems(Object.keys(response.items).map(i => ({name: i})));
    });
    getWeapons().then(response => {
      debugger;
    });
  }, []);

  const open = item => {
    debugger;
    setCurrentItem(items[item]);
  };

  return (
    <div className="App">
      <h1>Armas Fortinite</h1>
      {nameItems.map((item, i) => (
        <div key={i} onClick={() => open(item.name)}>
          {item.name}
        </div>
      ))}
      {currentItems.length ? (
        <Grid container justify="center">
          {currentItems.map((item, i) => (
            <Grid key={i} item xs={4} className={classes.grid}>
              <Card className={classes.root}>
                <CardHeader title={item.name} subheader={item.rarity}/>
                <CardMedia
                  className={classes.media}
                  image={item.images.icon}
                  title={item.name}
                  classes={{root: classes.mediaRoot}}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button size="small" color="primary">Leia Mais</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </div>
  );
}

export default HomePage;
