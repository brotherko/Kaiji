import { observable } from "mobx";
import Formdata from "../models/Formdata"

export default class UIStore {
  @observable messages = [];
  @observable recordCreateFormdata = new Formdata();

  constructor(rootStore){
    this.rootStore = rootStore
  }

  addMessage = (message) => {
    this.messages = [message]
  }

  clearMessage = () => {
    this.messages = [];
  }
}