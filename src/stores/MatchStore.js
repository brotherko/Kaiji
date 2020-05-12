import { observable, action, toJS, computed } from "mobx";
import { GamemodeEnum, ScoringEnum } from "../constants/enums";
import { defaultRules } from "../constants/games";
export default class MatchStore {
  @observable rounds = 0;
  @observable mode = GamemodeEnum.FOURPLAYERS;
  @observable customRules = {};
  @observable matches = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get rules() {
    return {
      ...defaultRules[this.mode],
      ...this.customRules,
    };
  }

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
}
