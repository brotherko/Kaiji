import { observable, action } from "mobx";

export default class MatchFormStore {
  @observable fields = [];

  rootStore = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  update(key, newValue = 0) {
    this.fields[key] = newValue;
  }

  @action
  updateByAmount(key, amount) {
    let cards = this.rootStore.matchStore.rules.cards;
    let newCards = this.fields[key] + parseInt(amount);
    if (newCards > cards) {
      this.fields[key] = newCards - cards;
    } else if (newCards < 0) {
      this.fields[key] = cards + newCards;
    } else {
      this.fields[key] = newCards;
    }
  }

  @action
  clear() {
    Object.keys(this.fields).map((key) => {
      this.fields[key] = "";
    });
  }

  @action
  addPlayer = (key, value = 0) => {
    this.fields.push(value);
  };
}
