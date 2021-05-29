import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
// import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
export default () => {
  // const Home = () => <Link to="/2">Homepage</Link>;
  // const PricePage = () => <Link to="/">PricePage</Link>;
  const conRef = useRef(null);

  useEffect(() => {
    mount(conRef.current);
  }, []);
  return (
    <div>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/2" component={PricePage} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter> */}
      <div ref={conRef} />
    </div>
  );
};
