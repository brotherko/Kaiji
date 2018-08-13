import { observable } from "mobx";
import Formdata from "../models/Formdata"

export default class UIStore {
  @observable messages = [];
  @observable recordCreateFormdata = new Formdata();
  @observable currentScreen = "managePlayers"; 

  constructor(rootStore){
    this.rootStore = rootStore
  }

  setCurrentScreen = (screen) => {
    this.currentScreen = screen;
  }

  addMessage = (message) => {
    this.messages = [message]
  }

  clearMessage = () => {
    this.messages = [];
  }
}