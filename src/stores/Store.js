import { observable, computed } from "mobx";

class Store {
  @observable players = []
  @observable playersCounter = 0
  @observable rounds = 0
  @observable dollarPerCard = 1
  @observable mode = 1

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
      players: this.players
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
  @observable records = [];
  @observable players;
  @computed get pnl() {
      return Object.keys(this.records).reduce((sum, round) => {
        return sum + this.players
        .filter((player) => (player.id !== this.id) && (player.records[round] != null))
        .reduce((sum, player) => sum + player.records[round] - this.records[round], 0)
    }, 0)
  };

  constructor(playerObj){
    this.id = playerObj.id;
    this.name = playerObj.name;
    this.records = {};
    this.players = playerObj.players;
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

export default new Store();