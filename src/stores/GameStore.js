import { observable } from "mobx";

export default class GameStore {
  @observable rounds = 0
  @observable rules = {
    dollarsPerCard: 1,
    doubleChao: true,
    tripleChao: true,
    scoring: 'winner'
  }

  constructor(rootStore){
    this.rootStore = rootStore
  }

  nextRound = () => {
    this.rounds += 1;
  }

  toggleRule = (ruleName) => {
    this.rules[ruleName] = !this.rules[ruleName];
  }

  createRecords = () => {
    const fields = this.rootStore.uiStore.recordCreateFormdata.fields;

    this.rootStore.playerStore.players.map(player => {
      player.addRecord(this.rounds, parseInt(fields[player.id]));
    });

    this.rootStore.uiStore.recordCreateFormdata.clear(0);
    this.rootStore.uiStore.setCurrentScreen('statistics');
    this.nextRound();
  };
}