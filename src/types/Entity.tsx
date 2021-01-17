import CharacterType from './CharacterType';
import Weapon from './Weapon';

type Entity = {
  name: string,
  type: CharacterType,
  stats: {
    strength: number,
    dex: number,
    arcana: number,
    exp: number,
    difficulty?: number
  },
  status: {
    maxHealth: number,
    health: number,
    maxMana: number,
    mana: number
  },
  inventory: any[],
  equippedWeapon: Weapon
};

export default Entity;
