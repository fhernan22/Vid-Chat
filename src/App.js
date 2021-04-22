import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";

import CssBaseline from "@material-ui/core/CssBaseline";

import { ThemeProvider } from "@material-ui/core/styles";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import darkTheme from "./util/themes";
import PrivateRoute from "./hooks/PrivateRoute";
import PublicRoute from "./hooks/PublicRoute";

import { Provider } from "react-redux";
import store from "./redux/store";
import { getUserData } from "./redux/actions/userActions";

import { SET_AUTHENTICATED } from "./redux/types";

const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);

  // Check if token is expired
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href("/login");
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <div className="App">
            <Navbar />
            <Switch>
              <PublicRoute path="/" exact component={Home} />
              <PublicRoute path="/login" exact component={LoginPage} />
              <PublicRoute path="/signup" exact component={SignUpPage} />
              <PrivateRoute path="/profile" exact component={Profile} />
            </Switch>
            <Footer />
          </div>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
