import { observable, action, toJS, computed } from "mobx";

export default class MatchStore {
  @observable rounds = 0;
  @observable rules = {
    dollarsPerCard: 1,
    doubleChao: true,
    tripleChao: true,
    scoring: "winner"
  };

  @observable matches = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get score() {
    const noOfPlayers = this.rootStore.playerStore.playersCounter;
    return this.matches.reduce(
      (sumMatches, match) => sumMatches.map((num, idx) => num + match[idx]),
      new Array(noOfPlayers).fill(0)
    );
  }

  @computed get pnl(){
    /*
      Assume 4 players
      A: (B-A) + (C-A) + (D-A)
      B: (A-B) + (C-B) + (D-B)
      C...
    */
    return this.score.map((p1Score, p1Idx) => this.score.reduce((p1Sum, pnScore, pnIdx) => {
      return p1Sum + ((p1Idx != pnIdx && pnScore != null)? pnScore - p1Score : 0)
    }, 0))
  }

  @action
  addMatch() {
    this.matches.push(toJS(this.rootStore.uiStore.matchFormdata.fields));
    this.rootStore.uiStore.matchFormdata.clear(0);
    this.rootStore.uiStore.setCurrentScreen("statistics");
  }
}
