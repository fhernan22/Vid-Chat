import React, { useContext, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/userActions";

import { SocketContext } from "../contexts/SocketContext";

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
  formContainer: {
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  form: {
    width: "100%",
  },
  input: {
    width: "50%",
  },
  topMargin: {
    marginTop: theme.spacing(4),
  },
  hide: {
    visibility: "hidden",
  },
  progress: {
    position: "absolute",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const { user } = props;
  const { me, callUser, callAccepted, callEnded, callingUser } = useContext(
    SocketContext
  );
  const [isFormVisible, setFormVisible] = useState(false);
  const [roomId, setRoomId] = useState("");

  return (
    <Container maxWidth="sm">
      {callAccepted && !callEnded && <Redirect to={`/conference/${roomId}`} />}
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
            onClick={() => setFormVisible(!isFormVisible)}
          >
            Join Meeting
          </Button>

          <Link to={`/conference/${me}`} style={{ width: "40%" }}>
            <Button
              className={classes.button}
              style={{ width: "100%" }}
              variant="contained"
              color="primary"
            >
              Create Meeting
            </Button>
          </Link>
        </div>
      </div>
      <Grid
        container
        className={classes.formContainer}
        style={{ visibility: !isFormVisible && "hidden" }}
      >
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container style={{ justifyContent: "center" }}>
            <TextField
              id="standard-basic"
              label="Room Id"
              className={classes.input}
              onChange={(e) => setRoomId(e.target.value)}
            />
          </Grid>
          <Grid
            container
            style={{ justifyContent: "center" }}
            className={classes.topMargin}
          >
            <Button
              color="secondary"
              variant="contained"
              disabled={callingUser}
              onClick={() => {
                callUser(roomId, user.credentials.firstName);
              }}
            >
              Join
              {!callAccepted && callingUser && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUserData })(Profile);
