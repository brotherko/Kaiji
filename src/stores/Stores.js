import PlayerStore from './PlayerStore';
import UIStore from './UIStore';
import MatchStore from './MatchStore';

export default class RootStore {
  constructor() {
    this.playerStore = new PlayerStore()
    this.uiStore = new UIStore()
    this.matchStore= new MatchStore(this.uiStore)
  }
}