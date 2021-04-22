import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

const PrivateRoute = ({
  component: RouteComponent,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <RouteComponent {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
