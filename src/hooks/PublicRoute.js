import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

const PublicRoute = ({ component: RouteComponent, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Redirect to="/profile" />
        ) : (
          <RouteComponent {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(PublicRoute);
