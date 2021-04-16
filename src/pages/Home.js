import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { ReactComponent as DiagonalLine } from "../icons/Diagonal Line.svg";
import { ReactComponent as Hero } from "../icons/heroChat.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: "20%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
    },
  },
  hero: {
    marginTop: "5%",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
    },
  },
  button: {
    marginRight: "20px",
  },
  primary: {
    color: "white",
    backgroundColor: "#4caf50",
    width: "100%",
    padding: "15px",
    fontSize: "1.1rem",
    "&:hover": {
      backgroundColor: "#66bb6a",
    },
  },
  secondary: {
    color: "white",
    backgroundColor: "#242830",
    width: "100%",
    padding: "15px",
    fontSize: "1.1rem",
    "&:hover": {
      backgroundColor: "#262a33",
    },
  },
  buttonGroup: {
    margin: "50px auto",
    width: "100%",
  },
  buttonContainer: {
    width: "50%",
  },
  heroImageContainer: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  heroImage: {
    width: "90%",
    height: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "60%",
      height: "60%",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <DiagonalLine style={{ position: "absolute", top: "0", zIndex: -500 }} />
      <Container maxWidth="lg" className={classes.hero}>
        <Grid container direction={matches ? "column" : "row"} spacing={2}>
          <Grid item md={5}>
            <Typography
              variant={matches ? "h4" : "h3"}
              align="center"
              className={classes.title}
            >
              Next Generation Video Chat App
            </Typography>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.buttonGroup}
              spacing={2}
            >
              <Grid item className={classes.buttonContainer}>
                <Link to="/login">
                  <Button variant="contained" className={classes.primary}>
                    Log In
                  </Button>
                </Link>
              </Grid>

              <Grid item className={classes.buttonContainer}>
                <Button variant="contained" className={classes.secondary}>
                  <a href="mailto:fhern103@fiu.edu">Get in Touch</a>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7} className={classes.heroImageContainer}>
            <Hero className={classes.heroImage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
