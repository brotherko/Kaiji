import { observable, action, toJS, computed, reaction } from "mobx";
import { GamemodeEnum, ScoringEnum } from "../constants/enums";
import { defaultRules } from "../constants/games";
import { database } from "../firebase";
export default class MatchStore {
  refId = null;
  @observable mode = GamemodeEnum.FOURPLAYERS;
  @observable customRules = {};
  @observable matches = [];
  @observable players = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get rounds() {
    return this.matches.length + 1;
  }

  @computed get rules() {
    return {
      ...defaultRules[this.mode],
      ...this.customRules,
    };
  }

  @computed get asObject() {
    return {
      mode: this.mode,
      customRules: toJS(this.customRules),
      matches: toJS(this.matches),
      players: toJS(this.players),
    };
  }

  // matchSyncToFirebase = reaction(
  //   () => this.asObject,
  //   (object) => {
  //     if (this.refId) {
  //       database.ref(`/matches/${this.refId}`).set(object);
  //     }
  //   }
  // );

  @computed get matchesAfterChao() {
    return this.matches.map((match) =>
      match.map((score) => {
        if (this.rules.tripleChao != 0 && score >= this.rules.tripleChao) {
          return score * 3;
        } else if (
          this.rules.doubleChao != 0 &&
          score >= this.rules.doubleChao
        ) {
          return score * 2;
        } else {
          return score;
        }
      })
    );
  }

  @computed get score() {
    const noOfPlayers = this.rootStore.playerStore.playersCounter;
    return this.matchesAfterChao.reduce(
      (sumMatches, match) => sumMatches.map((num, idx) => num + match[idx]),
      new Array(noOfPlayers).fill(0)
    );
  }

  @computed get pnl() {
    /*
      Assume 4 players
      A: (B-A) + (C-A) + (D-A)
      B: (A-B) + (C-B) + (D-B)
      C...
    */
    return this.score.map((p1Score, p1Idx) =>
      this.score.reduce((p1Sum, pnScore, pnIdx) => {
        return (
          p1Sum +
          (p1Idx != pnIdx && pnScore != null ? pnScore - p1Score : 0) *
            this.rules.dollarsPerCard
        );
      }, 0)
    );
  }

  @action
  addMatch() {
    this.matches.push(toJS(this.rootStore.matchformStore.fields));
    this.rootStore.matchformStore.clear();
    this.rootStore.uiStore.setCurrentScreen("statistics");
  }

  @action
  addPlayer = () => {
    this.players.push(`Player ${this.players.length + 1}`);
    return this.players.length - 1;
  };

  @action
  updatePlayer = (id, name) => {
    this.players[id] = name;
  };

  @action
  createMatch = () => {
    console.log("create match", this.asObject);
    let ref = database.ref("/matches").push(this.asObject);
    this.refId = ref.key;
  };
}
