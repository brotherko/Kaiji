import { observable, action } from "mobx";

export default class Formdata {
  @observable fields = [];

  @action
  add(key, value = 0) {
    this.fields.push(value)
  }

  @action
  update(key, newValue = 0) {
    if(newValue < 0 || newValue > 13) {
      this.fields[key] = 0;
    }else{
      this.fields[key] = newValue;
    }
  }

  @action
  updateByAmount(key, amount) {
    this.update(key, this.fields[key] + parseInt(amount));
    console.log(this.fields)
  }

  @action
  clear(clearValue = ''){
    Object.keys(this.fields).map((key) => {
      this.update(key, clearValue)
    })
  }
}