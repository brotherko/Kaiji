import { observable, action } from "mobx";

export default class UIStore {
  @observable messages = [];
  @observable currentScreen = "managePlayers";

  @action
  setCurrentScreen = (screen) => {
    this.currentScreen = screen;
  };
}
