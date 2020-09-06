import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Articles from "./pages/Articles";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage} o />
          <Route path="/articles" component={Articles} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
