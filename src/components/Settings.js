import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { GamemodeEnum, ScoringEnum } from "../constants/enums";

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
              <h6>Game Mode</h6>
              <div className="columns is-mobile is-centered has-text-centered">
                <div className="column has-text-centered">
                  <a
                    className={
                      (matchStore.mode === GamemodeEnum.FOURPLAYERS
                        ? "is-info "
                        : "") + "button is-rounded"
                    }
                    onClick={() => {
                      matchStore.mode = GamemodeEnum.FOURPLAYERS;
                    }}
                  >
                    13 Cards
                  </a>
                </div>
                <div className="column has-text-centered">
                  <a
                    className={
                      (matchStore.mode === GamemodeEnum.THREEPLAYERS
                        ? "is-info "
                        : "") + "button is-rounded"
                    }
                    onClick={() => {
                      matchStore.mode = GamemodeEnum.THREEPLAYERS;
                    }}
                  >
                    17 Cards
                  </a>
                </div>
              </div>
              <h6>Scoring Model</h6>
              <div className="columns is-mobile is-centered has-text-centered">
                <div className="column has-text-centered">
                  <a
                    className={
                      (matchStore.rules.scoring === ScoringEnum.WINNER
                        ? "is-info "
                        : "") + "button is-rounded"
                    }
                    onClick={() => {
                      matchStore.customRules.scoring = ScoringEnum.WINNER;
                    }}
                  >
                    Winner takes all
                  </a>
                </div>
                <div className="column has-text-centered">
                  <a
                    className={
                      (matchStore.rules.scoring === ScoringEnum.DIFF
                        ? "is-info "
                        : "") + "button is-rounded"
                    }
                    onClick={() => {
                      matchStore.customRules.scoring = ScoringEnum.DIFF;
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
                          matchStore.customRules.dollarsPerCard =
                            event.target.value;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-10">Double Chao</div>
                <div className="column is-2">
                  <input
                    className="input"
                    value={matchStore.rules.doubleChao}
                    onChange={(event) => {
                      matchStore.customRules.doubleChao = event.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-10">Triple Chao</div>
                <div className="column is-2">
                  <input
                    className="input"
                    value={matchStore.rules.tripleChao}
                    onChange={(event) => {
                      matchStore.customRules.tripleChao = event.target.value;
                    }}
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
