import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  author: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#8A94A7",
    },
  },
  footerText: {
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.footerText}>
        Built with{" "}
        <span style={{ display: "inline-block" }}>
          <FavoriteIcon
            style={{
              color: "red",
              height: "18px",
              verticalAlign: "middle",
            }}
          />
        </span>{" "}
        by{" "}
        <a className={classes.author} href="https://github.com/fhernan22">
          Fidel Hernandez
        </a>
      </p>
    </div>
  );
};

export default Footer;
