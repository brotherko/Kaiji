import { observable, action } from "mobx";
import Player from '../models/Player';

export default class PlayerStore {
  @observable players = []
  @observable playersCounter = 0

  @action
  getPlayer = (id) => {
    id = parseInt(id, 10)
    return this.players.find((player) => {
      return player.id === id
    })
  }
  
  @action
  createPlayer = () => {
    const newPlayerId = this.playersCounter
    this.players.push(new Player(newPlayerId, `Player ${this.playersCounter}`))
    this.playersCounter += 1;
    return newPlayerId
  }

}
