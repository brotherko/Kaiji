import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Toggle from "./common/Toggle";

@inject("stores")
@observer
export default class Settings extends Component {
  render() {
    const { matchStore } = this.props.stores;
    return (
      <section id="settings" className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Settings</h1>
            <h2 className="subtitle">Change the game settings</h2>
            <div className="content">
              <h4>Game Rules</h4>
              <h6>Scoring System</h6>
              <div className="columns is-mobile is-centered has-text-centered">
                <div className="column has-text-centered">
                  <a
                    className={
                      (matchStore.rules.scoring === "winner"
                        ? "is-info "
                        : "") + "button is-rounded"
                    }
                    onClick={() => {
                      matchStore.rules.scoring = "winner";
                    }}
                  >
                    Winner takes all
                  </a>
                </div>
                <div className="column has-text-centered">
                  <a
                    className={
                      (matchStore.rules.scoring === "diff" ? "is-info " : "") +
                      "button is-rounded"
                    }
                    onClick={() => {
                      matchStore.rules.scoring = "diff";
                    }}
                  >
                    Diff by players
                  </a>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-10">Dollars / Card</div>
                <div className="column is-2">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        value={matchStore.rules.dollarsPerCard}
                        onChange={(event) => {
                          matchStore.rules.dollarsPerCard = event.target.value;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-10">Double Chao</div>
                <div className="column is-2">
                  <Toggle
                    onClick={() => matchStore.toggleRule("doubleChao")}
                    name="doubleChao"
                    value={matchStore.rules.doubleChao}
                  />
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-10">Triple Chao</div>
                <div className="column is-2">
                  <Toggle
                    onClick={() => matchStore.toggleRule("tripleChao")}
                    name="tripleChao"
                    value={matchStore.rules.tripleChao}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
