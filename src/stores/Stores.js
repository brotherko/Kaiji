import PlayerStore from "./PlayerStore";
import UIStore from "./UIStore";
import MatchStore from "./MatchStore";
import MatchFormStore from "./MatchFormStore";

export default class RootStore {
  constructor() {
    this.playerStore = new PlayerStore();
    this.uiStore = new UIStore();
    this.matchStore = new MatchStore(this);
    this.matchformStore = new MatchFormStore(this);
  }
}
