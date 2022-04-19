import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import React, {useEffect} from "react";
import Footer from "../../components/footer";
import ADSSection from "../section/AdsSection";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 40,
    paddingTop: 100,
    [theme.breakpoints.down("xs")]: {
      padding: 15
    }
  },
  title: {
    color: "#D6D4DB"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  card: {
    cursor: "pointer",
    transition: "all 0.1s",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "#af14ec 1px 1px 15px 0px"
    }
  }
}));

const recents = [{
  name: "Fight Covid - App",
  url: "/ui/single-pages/covid",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594560822/react-examples/fight-covid-app.png"
}, {
  name: "Google Play Cards",
  url: "/ui/single-pages/mobile/details/03",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594214210/react-examples/google-play-mobile-cards.png"
}, {
  name: "Delivery Food Examples",
  url: "/ui/single-pages/delivery-food",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593909378/react-examples/delivery-food.png"
}, {
  name: "Mobile Examples",
  url: "/ui/single-pages/mobile",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594131215/react-examples/mobile-example.gif"
}, {
  name: "Single Page Mobile",
  url: "/ui/single-pages/mobile/details/01",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594132130/react-examples/mobile-01.png"
}, {
  name: "E-commerce Cards",
  url: "/ui/cards/ecommerceCard",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593692814/react-examples/ecommerce-cards.png"
}, {
  name: "Airbnb Cards",
  url: "/ui/cards/airbnbCard",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593610079/react-examples/airbnb-cover-cards.jpg"
}, {
  name: "Google Now Single Page",
  url: "/ui/single-pages/mobile/details/02",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594131745/react-examples/mobile-google-now.png.png"
}, {
  name: "Simple Card",
  url: "/ui/cards/simpleCard",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593522879/react-examples/example01.png"
}, {
  name: "Simple Lists",
  url: "/ui/lists/simpleList",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1594131401/react-examples/ui_ios.gif"
}];

function HomePage(props) {
  const classes = useStyles();
  useEffect(() => {
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <h3 className={classes.title}>Recent Content</h3>
          <Grid container spacing={2}>
            {recents.map((r, i) => (
              <Grid item xs={12} lg={4}>
                <Card key={i} classes={{root: classes.card}} onClick={() => props.history.push(r.url)}>
                  <CardHeader title={r.name} subheader={r.desc}/>
                  <CardMedia
                    image={r.cover}
                    className={classes.media}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <ADSSection/>
      </Grid>

      <Footer/>

    </div>
  );
}

export default withWidth()(HomePage);
