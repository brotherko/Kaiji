import React, { Component } from "react";

import Nav from "./components/Nav";
import CreateMatch from "./components/CreateMatch";
import ManageMatch from "./components/ManageMatch";
import Statistics from "./components/Statistics";
import Settings from "./components/Settings";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { observer, inject } from "mobx-react";

library.add(fas);

@inject("stores")
@observer
class App extends Component {
  render() {
    const { uiStore } = this.props.stores;
    return (
      <div>
        <Nav />
        {uiStore.currentScreen == "managePlayers" && <CreateMatch />}
        {uiStore.currentScreen == "manageMatches" && <ManageMatch />}
        {uiStore.currentScreen == "statistics" && <Statistics />}
        {uiStore.currentScreen == "settings" && <Settings />}
      </div>
    );
  }
}

export default App;
