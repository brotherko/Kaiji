import { observable } from "mobx";
import Player from '../models/Player';

export default class PlayerStore {
  @observable players = []
  @observable playersCounter = 0

  constructor(rootStore){
    this.rootStore = rootStore
  }

  getPlayer = (id) => {
    id = parseInt(id, 10)
    return this.players.find((player) => {
      return player.id === id
    })
  }

  createPlayer = () => {
    this.rootStore.uiStore.recordCreateFormdata.add(this.playersCounter)

    this.players.push(new Player({
      id: this.playersCounter,
      name: `Player ${this.playersCounter}`,
      root: this
    }))
    this.playersCounter += 1;
  }

}
