import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ManagePlayers from "./ManagePlayers";
import Settings from "./Settings";
import { GamemodeEnum, ScoringEnum } from "../constants/enums";

@inject("stores")
@observer
export default class RecordCreate extends Component {
  constructor(props) {
    super(props);
  }
  changeHandler = (player, event) => {
    player.update({
      name: event.target.value,
    });
  };
  createPlayer = () => {
    const newPlayerId = this.props.stores.playerStore.createPlayer();
    this.props.stores.matchformStore.addPlayer(newPlayerId, 0);
  };
  render() {
    const { playerStore, matchStore } = this.props.stores;
    return (
      <div>
        <section class="hero is-primary">
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

                <h4 className="subtitle">Players</h4>
                {playerStore.players.map((player, index) => (
                  <div className="column player" key={player.id}>
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
                          name={player.id}
                          value={player.name}
                          onChange={(e) => this.changeHandler(player, e)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  className="button is-primary is-outlined is-large is-fullwidth is-inverted"
                  onClick={() => this.createPlayer()}
                >
                  New Player
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
