interface Entity {
  name: string;
  stats: {
    strength: number;
    dex: number;
    arcana: number;
  },
  status: {
    health: number;
    mana: number;
  },
  inventory: any[],
  equippedWeapon: any
}

export default Entity;
