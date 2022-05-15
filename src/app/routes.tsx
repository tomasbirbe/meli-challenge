import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import DetailsScreen from "../product/screens/Details";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={DetailsScreen} path="/:product" />
      <Redirect to="/productExample" />
    </Switch>
  );
};

export default Routes;
