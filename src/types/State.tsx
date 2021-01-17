import Entity from "./Entity";
import CharacterType from './CharacterType';

type State = { 
  currentTurn: CharacterType,
  player: Entity;
  currentMob: Entity;
  log: string[];
}

export default State;
