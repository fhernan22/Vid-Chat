import React, { useContext } from "react";

import { Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import CallEndIcon from "@material-ui/icons/CallEnd";
import AssignmentIcon from "@material-ui/icons/Assignment";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { SocketContext } from "../contexts/SocketContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  endCall: {
    backgroundColor: red[700],
    color: "white",
    borderRadius: "50%",
    width: "4rem",
    height: "4rem",
    margin: theme.spacing(2),

    "&:hover": {
      backgroundColor: red[900],
    },
  },
  options: {
    borderRadius: "50%",
    width: "4rem",
    height: "4rem",
    color: "white",
    margin: theme.spacing(2),
  },
}));

const Options = () => {
  const classes = useStyles();
  const { leaveCall, me } = useContext(SocketContext);

  return (
    <div className={classes.root}>
      <CopyToClipboard text={me} className={classes.margin}>
        <Tooltip title="Copy Room Id">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.options}
          >
            <AssignmentIcon fontSize="large" />
          </Button>
        </Tooltip>
      </CopyToClipboard>

      <Tooltip title="End Call">
        <Button
          variant="contained"
          color="danger"
          fullWidth
          className={classes.endCall}
          onClick={leaveCall}
        >
          <CallEndIcon fontSize="large" />
        </Button>
      </Tooltip>

      <Tooltip title="Mute">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.options}
        >
          <VolumeOffIcon fontSize="large" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default Options;
