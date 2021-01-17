import Entity from "./Entity";
import CharacterType from './CharacterType';

type State = { 
  currentTurn: CharacterType,
  player: Entity;
  currentMob: Entity;
}

export default State;
