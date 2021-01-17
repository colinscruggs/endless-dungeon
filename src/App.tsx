import React, { Component } from 'react';
import './css/App.css';
import EntityComponent from './components/EntityComponent';
import ActionMenu from './components/ActionMenu';
import State from './types/State';
import CharacterType from './types/CharacterType';
import WeaponType from './types/WeaponType';

class App extends Component<any, State> {
  constructor(props: any) {
    super(props);
     // THIS IS THE MAIN STATE I GUESS
    this.state = {
      currentTurn: CharacterType.Player,
      player: {
        name: 'Colin',
        stats: {
          strength: 5,
          dex: 5,
          arcana: 5
        },
        status: {
          maxHealth: 100,
          health: 100,
          maxMana: 50,
          mana: 50
        },
        inventory: [],
        equippedWeapon: {
          name: 'Sword',
          type: WeaponType.Melee,
          attackPower: 5,
          accuracy: .9
        }
      },
      currentMob: {
        name: 'Enemy',
        stats: {
          strength: 5,
          dex: 5,
          arcana: 5
        },
        status: {
          maxHealth: 100,
          health: 100,
          maxMana: 50,
          mana: 50
        },
        inventory: [],
        equippedWeapon: {
          name: 'Claw',
          type: WeaponType.Melee,
          attackPower: 3,
          accuracy: .85
        }
      }
    }
  }

  changeTurn = (turn: CharacterType) => {
    this.setState({ currentTurn: turn})
  }

  playerAttack = () => {
    // TODO: add switch/case for different attack styles
    let min = this.state.player.stats.strength;
    let max = this.state.player.equippedWeapon.attackPower + this.state.player.stats.strength;
    let damage = this.calculateDamage(min, max);

    this.setState((state) => ({
      currentMob: {
        ...state.currentMob,
        status: {
          ...state.currentMob.status,
          health: Math.max(state.currentMob.status.health - damage, 0)
        }
      }
    }));

    // end turn
    this.changeTurn(CharacterType.Mob);

    // TODO: figure out how to actually react to state.currentTurn === Mob
    setTimeout(this.mobAttack, 1000);
  }

  mobAttack = () => {
    let min = this.state.currentMob.stats.strength;
    let max = this.state.currentMob.equippedWeapon.attackPower + this.state.currentMob.stats.strength;
    let damage = this.calculateDamage(min, max);

    this.setState((state) => ({
      player: {
        ...state.player,
        status: {
          ...state.player.status,
          health: Math.max(state.player.status.health - damage, 0)
        }
      }
    }));
    // end turn
    this.changeTurn(CharacterType.Player);
  }

  calculateDamage = (min: number, max: number, type?: any) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /* tslint:disable-next-line */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Endless Dungeon</h2>
        </header>

        <div className="body">
          <div className="mob">
            <EntityComponent {...this.state.currentMob}></EntityComponent>
          </div>

          <div className="player">
            <EntityComponent {...this.state.player}></EntityComponent>
            <ActionMenu currentTurn={this.state.currentTurn} playerAttack={this.playerAttack}></ActionMenu>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
