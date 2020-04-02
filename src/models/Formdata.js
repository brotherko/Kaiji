import { observable, action } from "mobx";

export default class Formdata {
  @observable fields = {};

  @action
  add = (key, value = '') => {
    this.fields[key] = value;
  }

  @action
  update = (key, newValue = '') => {
    if(newValue < 0 || newValue > 13) {
      this.fields[key] = 0;
    }else{
      this.fields[key] = newValue;
    }
  }

  @action
  updateByAmount = (key, amount) => {
    this.update(key, this.fields[key] + parseInt(amount));
  }

  @action
  clear = (clearValue = '') => {
    Object.keys(this.fields).map((key) => {
      this.update(key, clearValue)
    })
  }
}