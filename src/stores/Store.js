import { observable } from "mobx";
import Player from './models/Player';
import Message from './models/Message';

class Store {
  @observable players = []
  @observable playersCounter = 0
  @observable rounds = 0
  @observable rules = {
    dollarPerCard: 1,
    doubleChao: true,
    tripleChao: true
  }

  @observable messages = [];

  getPlayer = (id) => {
    id = parseInt(id, 10)
    return this.players.find((player) => {
      return player.id === id
    })
  }

  createPlayer = () => {
    this.players.push(new Player({
      id: this.playersCounter,
      name: `Player ${this.playersCounter}`,
      root: this
    }))
    this.playersCounter += 1;
  }

  addMessage = (message) => {
    this.messages = [new Message(message)]
  }

  clearMessage = () => {
    this.messages = [];
  }
}

export default new Store();