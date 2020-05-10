import { GamemodeEnum, ScoringEnum } from "./enums";

const sharedRules = {
  dollarsPerCard: 1,
  scoring: ScoringEnum.DIFF,
};

const defaultRules = {};

defaultRules[GamemodeEnum.FOURPLAYERS] = {
  mode: GamemodeEnum.FOURPLAYERS,
  cards: 13,
  doubleChao: 10,
  tripleChao: 13,
  ...sharedRules,
};

defaultRules[GamemodeEnum.THREEPLAYERS] = {
  mode: GamemodeEnum.THREEPLAYERS,
  cards: 17,
  doubleChao: 10,
  tripleChao: 0,
  ...sharedRules,
};

export { defaultRules };
