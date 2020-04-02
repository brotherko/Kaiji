import { observable, computed } from "mobx";

export default class Player {
  @observable id;
  @observable name;

  constructor(id, name){
    this.id = id;
    this.name = name;
  }

  update = (player) => {
    this.name = player.name 
  }
}