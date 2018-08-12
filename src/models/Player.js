import { observable, computed } from "mobx";

export default class Player {
  @observable id;
  @observable name;
  @observable rawRecords = [];
  @observable root;

  @computed get records() {
    return this.rawRecords.map((record) => 
    ((record === 13 && this.rules.tripleChao) ? 
      record*3 : 
        (record > 9 && this.rules.doubleChao) ?
        record*2 :
        record))
  }
  @computed get pnl() {
    return Object
    .keys(this.records)
    .reduce((sum, round) => {
      return sum + this.root.players
      .filter((player) => (player.id !== this.id) && (player.records[round] != null))
      .reduce((sum, player) => {
        return sum + player.records[round] - this.records[round]
      }, 0)
    }, 0)
  };

  constructor(playerObj){
    this.id = playerObj.id;
    this.name = playerObj.name;
    this.root = playerObj.root;

    this.rules = this.root.rootStore.gameStore.rules;
  }

  addRecord(rounds, cards) {
    this.rawRecords[rounds] = cards
  }

  update = (player) => {
    this.name = player.name 
  }
}