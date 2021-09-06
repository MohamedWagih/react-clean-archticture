import React from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({
  component: Component,
  protectedRoute = false,
  ...restOfProps
}) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        protectedRoute ? (
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            loginWithRedirect()
          )
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default ProtectedRoute;
