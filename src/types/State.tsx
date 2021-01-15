import Entity from "./Entity";

interface State { 
  player: Entity | any;
  currentMob: Entity;
}

export default State;
