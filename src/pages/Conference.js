import React, { useEffect, useState, useContext } from "react";

import { Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import VideoPlayer from "../components/VideoPlayer";
import Options from "../components/Options";
import Notifications from "../components/Notifications";
import { SocketContext } from "../contexts/SocketContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "85vh",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
    backgroundColor: "#1F2228",
    borderRadius: "10px",
    padding: "20px",
  },
  videoContainer: {
    width: "90%",
    height: "90%",
    borderRadius: "10px",
    backgroundColor: "#17191d",
  },
}));

const Conference = () => {
  const classes = useStyles();
  const { myVideo, makeStream, callAccepted, callEnded } = useContext(
    SocketContext
  );

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        makeStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });
  }, []);

  return (
    <Container component="main" maxWidth="lg">
      {callEnded && <Redirect to="/profile" />}
      <div className={classes.paper}>
        <VideoPlayer />
        <Options />
        <Notifications />
      </div>
    </Container>
  );
};

export default Conference;
