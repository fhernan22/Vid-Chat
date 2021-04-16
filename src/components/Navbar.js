import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    letterSpacing: "0.2rem",
  },
  header: {
    boxShadow: "none",
  },
  toolbar: {
    padding: 0,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.header}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">VidChat</Link>
            </Typography>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
