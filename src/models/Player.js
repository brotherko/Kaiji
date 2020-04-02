import { observable, computed } from "mobx";

export default class Player {
  @observable id;
  @observable name;

  constructor(id, name){
    this.id = id;
    this.name = name;
  }

  // @computed get records() {
  //   return this.rawRecords.map((record) => 
  //   ((record === 13 && this.rules.tripleChao) ? 
  //     record*3 : 
  //       (record > 9 && this.rules.doubleChao) ?
  //       record*2 :
  //       record))
  // }

  // @computed get score() {
  //   return (this.rules.scoring === 'diff') ?
  //   Object
  //   .keys(this.records)
  //   .reduce((sum, round) => {
  //     return sum + this.root.players
  //     .filter((player) => (player.id !== this.id) && (player.records[round] != null))
  //     .reduce((sum, player) => {
  //       return sum + player.records[round] - this.records[round]
  //     }, 0)
  //   }, 0) :
  //   Object
  //   .keys(this.records)
  //   .reduce((sum, key) => {
  //     return sum + ((this.records[key] === 0) ?
  //     (this.root.players.reduce((sum, player) => sum + player.records[key], 0)) :
  //     -(this.records[key]))
  //   }, 0)
  // };

  // @computed get pnl() {
  //   return this.score * this.rules.dollarsPerCard;
  // }

  // addRecord(rounds, cards) {
  //   this.rawRecords[rounds] = cards
  // }

  update = (player) => {
    this.name = player.name 
  }
}