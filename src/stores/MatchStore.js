import { observable, action } from "mobx";

export default class MatchStore {
  @observable rounds = 0
  @observable rules = {
    dollarsPerCard: 1,
    doubleChao: true,
    tripleChao: true,
    scoring: 'winner'
  }

  @observable matches = []

  constructor(uiStore){
    this.uiStore = uiStore 
  }

  @action
  addMatch = () => {
    const fields = this.uiStore.matchFormdata.fields
    console.log(fields.get)
    this.matches.push(this.uiStore.matchFormdata.fields)
  };
}