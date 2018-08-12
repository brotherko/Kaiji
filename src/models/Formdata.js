import { observable } from "mobx";

export default class Formdata {
  @observable fields = {};

  add = (key, value = '') => {
    this.fields[key] = value;
  }

  update = (key, newValue = '') => {
    this.fields[key] = newValue;
  }

  clear = () => {
    Object.keys(this.fields).map((key) => {
      this.update(key, '')
    })
  }
}