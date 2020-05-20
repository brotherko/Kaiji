import React, { Component } from "react";

import Nav from "./components/Nav";
import CreateMatch from "./components/CreateMatch";
import ManageMatch from "./components/ManageMatch";
import Statistics from "./components/Statistics";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

library.add(fas);

@inject("stores")
@observer
class App extends Component {
  render() {
    const { uiStore } = this.props.stores;
    return (
      <Switch>
        <Route path="/">
          <CreateMatch />
        </Route>
        <Route path="/match/:id">
          <Nav />
          <ManageMatch />
        </Route>
        <Route path="/match/:id/result">
          <Nav />
          <Statistics />
        </Route>
      </Switch>
    );
  }
}

export default App;
