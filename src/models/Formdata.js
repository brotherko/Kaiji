import { observable } from "mobx";

export default class Formdata {
  @observable fields = {};

  add = (key, value = '') => {
    this.fields[key] = value;
  }

  update = (key, newValue = '') => {
    if(newValue < 0 || newValue > 13) {
      this.fields[key] = 0;
    }else{
      this.fields[key] = newValue;
    }
  }

  updateByAmount = (key, amount) => {
    this.update(key, this.fields[key] + parseInt(amount));
  }
  clear = (clearValue = '') => {
    Object.keys(this.fields).map((key) => {
      this.update(key, clearValue)
    })
  }
}