import { observable, action } from "mobx";
import Formdata from "../models/Formdata"

export default class UIStore {
  @observable messages = [];
  @observable matchFormdata = new Formdata();
  @observable currentScreen = "managePlayers"; 

  @action
  addPlayerToMatchFormdata = (key, value = 0) => {
    this.matchFormdata.add(key, value)
  }

  @action
  updateFieldToMatchFormdata = (key, value = 0) => {
    this.matchFormdata.updateByAmount(key, value)
  }

  @action
  setCurrentScreen = (screen) => {
    this.currentScreen = screen;
  }
}