import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  userName: {
    marginTop: theme.spacing(3),
  },
  buttonGroup: {
    marginTop: theme.spacing(4),
    width: "70%",
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    color: "white",
    padding: "15px",
    width: "40%",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const { user } = props;

  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{user.credentials.userImage}</Avatar>
        <Typography className={classes.userName} component="h1" variant="h5">
          {`${user.credentials.firstName} ${user.credentials.lastName}`}
        </Typography>
        <div className={classes.buttonGroup}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Join Meeting
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Create Meeting
          </Button>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUserData })(Profile);
