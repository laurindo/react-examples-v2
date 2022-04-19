import MuiButton from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#01CAFF",
    borderRadius: 20,
    color: "#091E4B",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#a71ce6",
      color: "#fff"
    }
  }
}));

function Button({children, ...props}) {
  const classes = useStyles();
  return (
    <MuiButton classes={{root: classes.button}} {...props}>{children}</MuiButton>
  );
}

export default withWidth()(Button);
