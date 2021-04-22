import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
    backgroundColor: "#1F2228",
    borderRadius: "10px",
    padding: "20px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  progress: {
    position: "absolute",
  },
}));

const LoginPage = (props) => {
  const classes = useStyles();

  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const {
    UI: { loading },
  } = props;

  const { errors } = currentUser;

  useEffect(() => {
    setCurrentUser({
      ...currentUser,
      errors: props.UI.errors,
    });
  }, [props.UI.errors]);

  const handleChange = (event) => {
    setCurrentUser({
      ...currentUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: currentUser.email,
      password: currentUser.password,
    };
    props.loginUser(userData, props.history);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            className={classes.inputField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            color="secondary"
            value={currentUser.email}
            helperText={errors.email}
            error={errors.email ? true : false}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            color="secondary"
            value={currentUser.password}
            helperText={errors.password}
            error={errors.password ? true : false}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          {errors.general && (
            <Typography
              variant="body2"
              color="error"
              className={classes.customError}
            >
              {errors.general}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={loading}
          >
            Sign In
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                className={classes.link}
                to="/"
                variant="body2"
                color="grey"
              >
                <span>Forgot password?</span>
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                to="/signup"
                variant="body2"
                color="grey"
              >
                <span>Don't have an account? Sign Up</span>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
