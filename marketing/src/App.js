import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
export default () => {
  const Home = () => <Link to="/2">Homepage</Link>;
  const PricePage = () => <Link to="/">PricePage</Link>;
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/2" component={PricePage} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
