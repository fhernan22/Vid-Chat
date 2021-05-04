import React, { useContext, useState, useRef, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { SocketContext } from "../contexts/SocketContext";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  video: {
    borderRadius: "10px",
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  paper: {
    background: "none !important",
    boxShadow: "none",
    margin: "10px",
  },
}));

const VideoPlayer = (props) => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    call,
    me,
    stream,
  } = useContext(SocketContext);

  const classes = useStyles();
  // const [stream, setStream] = useState();
  // const myVideo = useRef();

  // useEffect(() => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true, audio: true })
  //     .then((currentStream) => {
  //       setStream(currentStream);

  //       myVideo.current.srcObject = currentStream;
  //     });
  // }, []);

  // console.log("My video: ", myVideo, "User video: ", userVideo);

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {props.user.credentials.firstName || "Name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}

      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(VideoPlayer);
