import PlayerStore from './PlayerStore';
import UIStore from './UIStore';
import GameStore from './GameStore';

export default class RootStore {
  constructor() {
    this.playerStore = new PlayerStore(this)
    this.uiStore = new UIStore(this)
    this.gameStore= new GameStore(this)
  }
}