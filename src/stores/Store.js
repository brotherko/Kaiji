import { observable, computed } from "mobx";

class Store {
  @observable players = []
  @observable playersCounter = 0
  @observable rounds = 0
  @observable dollarPerCard = 1

  @observable messages = [];

  getPlayer = (id) => {
    id = parseInt(id)
    return this.players.find((player) => {
      return player.id === id
    })
  }

  createPlayer = () => {
    this.players.push(new Player({
      id: this.playersCounter,
      name: `Player ${this.playersCounter}` 
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

class Player {
  @observable id;
  @observable name;
  @observable records;
  @computed get totalPNL() {
    return Object.keys(this.records).reduce((sum, key) => sum + this.records[key], 0)
  }

  constructor(playerObj){
    this.id = playerObj.id,
    this.name = playerObj.name,
    this.records = {}
  }

  addRecord(rounds, cards) {
    this.records[rounds] = cards
  }

  update = (player) => {
    this.name = player.name 
  }
}

class Message {
  @observable type
  @observable content 

  constructor(message) {
    this.type = message.type || 'Error';
    this.content = message.content;
  }
}

export default new Store;