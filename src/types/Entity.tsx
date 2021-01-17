import Weapon from './Weapon';

type Entity = {
  name: string,
  stats: {
    strength: number,
    dex: number,
    arcana: number,
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
