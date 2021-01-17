import WeaponType from './WeaponType';

type Weapon = {
  name: string,
  type: WeaponType,
  attackPower: number,
  accuracy: number
}

export default Weapon;