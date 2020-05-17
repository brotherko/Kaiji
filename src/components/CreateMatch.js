import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";
import { GamemodeEnum, ScoringEnum } from "../constants/enums";

@inject("stores")
@observer
export default class RecordCreate extends Component {
  constructor(props) {
    super(props);
  }
  changeHandler = (id, event) => {
    this.props.stores.matchStore.updatePlayer(id, event.target.value);
  };
  createPlayer = () => {
    const newPlayerId = this.props.stores.matchStore.addPlayer();
    this.props.stores.matchformStore.addPlayer(newPlayerId, 0);
  };
  createMatch = () => {
    this.props.stores.matchStore.createMatch();
  };
  render() {
    const { playerStore, matchStore } = this.props.stores;
    return (
      <div>
        <section class="hero is-primary is-fullheight">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Create new match</h1>
              <div className="content">
                <h4 className="subtitle">Game mode</h4>
                <div className="columns is-mobile is-centered has-text-centered">
                  <div class="buttons has-addons are-medium is-centered">
                    <button
                      className={
                        "button" +
                        (matchStore.mode === GamemodeEnum.FOURPLAYERS
                          ? " is-active"
                          : "")
                      }
                      onClick={() => {
                        matchStore.mode = GamemodeEnum.FOURPLAYERS;
                      }}
                    >
                      4 Players
                    </button>
                    <button
                      className={
                        "button" +
                        (matchStore.mode === GamemodeEnum.THREEPLAYERS
                          ? " is-active"
                          : "")
                      }
                      onClick={() => {
                        matchStore.mode = GamemodeEnum.THREEPLAYERS;
                      }}
                    >
                      3 Players
                    </button>
                  </div>
                </div>
                <h4 className="subtitle">Scoring model</h4>
                <div className="columns is-mobile is-centered has-text-centered">
                  <div className="buttons has-addons are-medium is-centered">
                    <button
                      className={
                        "button" +
                        (matchStore.rules.scoring === ScoringEnum.WINNER
                          ? " is-active"
                          : "")
                      }
                      onClick={() => {
                        matchStore.customRules.scoring = ScoringEnum.WINNER;
                      }}
                    >
                      Winner takes all
                    </button>
                    <button
                      className={
                        "button" +
                        (matchStore.rules.scoring === ScoringEnum.DIFF
                          ? " is-active"
                          : "")
                      }
                      onClick={() => {
                        matchStore.customRules.scoring = ScoringEnum.DIFF;
                      }}
                    >
                      Diff by players
                    </button>
                  </div>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-9">Dollars / Card</div>
                  <div className="column is-3">
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
                  <div className="column is-9">Double Chao</div>
                  <div className="column is-3">
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
                  <div className="column is-9">Triple Chao</div>
                  <div className="column is-3">
                    <input
                      className="input"
                      value={matchStore.rules.tripleChao}
                      onChange={(event) => {
                        matchStore.customRules.tripleChao = event.target.value;
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="is-pulled-left">
                    <h4 className="subtitle">
                      Players{" "}
                      <span onClick={() => this.createPlayer()}>(+)</span>
                    </h4>
                  </div>
                </div>
                <div className="is-clearfix"></div>
                {matchStore.players.map((playerName, index) => (
                  <div className="column player" key={index}>
                    <div className="field">
                      <div>
                        <h4 className="has-text-white is-pulled-left">
                          Player {index}
                        </h4>
                        <a class="delete is-medium is-pulled-right"></a>
                      </div>
                      <div className="control">
                        <input
                          className="input"
                          value={playerName}
                          onChange={(e) => this.changeHandler(index, e)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  className="button is-info is-outlined is-large is-fullwidth is-inverted"
                  onClick={() => this.createMatch()}
                >
                  Create Match
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
