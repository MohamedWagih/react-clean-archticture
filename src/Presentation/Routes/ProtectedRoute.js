import React from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : loginWithRedirect()
      }
    />
  );
}

export default ProtectedRoute;
