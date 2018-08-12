import { observable } from "mobx";

export default class GameStore {
  @observable rounds = 0
  @observable rules = {
    dollarPerCard: 1,
    doubleChao: true,
    tripleChao: true
  }

  constructor(rootStore){
    this.rootStore = rootStore
  }

  nextRound = () => {
    this.rounds += 1;
  }

  createRecords = () => {
    const fields = this.rootStore.uiStore.recordCreateFormdata.fields;

    this.rootStore.playerStore.players.map(player => {
      player.addRecord(this.rounds, parseInt(fields[player.id]));
    });

    this.rootStore.uiStore.recordCreateFormdata.clear(0);

    this.nextRound();
  };
}