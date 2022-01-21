import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Index;
