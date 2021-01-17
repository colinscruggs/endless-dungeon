import React from "react";
import { Button } from 'antd';
import '../css/ActionMenu.css';
import 'antd/lib/button/style/index.css';
import CharacterType from "../types/CharacterType";
import WeaponType from "../types/WeaponType";

class ActionMenu extends React.Component<any, any> {
  render() {
    const {
      currentTurn,
      playerAttack,
      spawnNewMob,
      currentMob,
      player,
      resetGame
    } = this.props;
    return (
      <div className="actionContainer">

      { player.status.health === 0 ?
        (
          <>
          <Button 
            type="primary" 
            onClick={resetGame}
          >
            Try Again
          </Button>

          <Button 
            type="primary" 
            onClick={() => spawnNewMob({
            name: 'Wandering Goblin',
            type: CharacterType.Mob,
            stats: {
              strength: 3,
              dex: 2,
              arcana: 0,
              exp: 15,
              difficulty: 0.2
            },
            status: {
              maxHealth: 30,
              health: 30,
              maxMana: 1,
              mana: 1
            },
            inventory: [],
            equippedWeapon: {
              name: 'Large Club',
              type: WeaponType.Melee,
              attackPower: 5,
              accuracy: .7
            }
            })}
            disabled={currentMob.status.health > 0}
          >
            Continue
          </Button>
          </>
        )
      : (
        <>
          <Button 
            type="primary" 
            danger
            onClick={playerAttack}
            disabled={currentTurn === CharacterType.Mob || currentMob.status.health === 0}
          >
            Attack
          </Button>
        
          <Button 
            type="primary" 
            onClick={() => spawnNewMob({
            name: 'Wandering Goblin',
            type: CharacterType.Mob,
            stats: {
              strength: 4,
              dex: 2,
              arcana: 0,
              exp: 15,
              difficulty: 0.2
            },
            status: {
              maxHealth: 30,
              health: 30,
              maxMana: 1,
              mana: 1
            },
            inventory: [],
            equippedWeapon: {
              name: 'Large Club',
              type: WeaponType.Melee,
              attackPower: 5,
              accuracy: .7
            }
            })}
            disabled={currentMob.status.health > 0}
          >
            Continue
          </Button>
        </>
      )}

      </div>
    );
  }
};

export default ActionMenu;