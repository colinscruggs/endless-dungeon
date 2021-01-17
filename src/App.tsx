import { Component } from 'react';
import EntityComponent from './components/EntityComponent';
import ActionMenu from './components/ActionMenu';
import BattleLog from './components/BattleLog';

import State from './types/State';
import CharacterType from './types/CharacterType';
import WeaponType from './types/WeaponType';

import './css/App.css';
import Entity from './types/Entity';

class App extends Component<any, State> {
  constructor(props: any) {
    super(props);
     // THIS IS THE MAIN STATE I GUESS
    this.state = {
      currentTurn: CharacterType.Player,
      player: {
        name: 'Player',
        type: CharacterType.Player,
        stats: {
          strength: 5,
          dex: 5,
          arcana: 5,
          exp: 0
        },
        status: {
          maxHealth: 80,
          health: 80,
          maxMana: 50,
          mana: 50
        },
        inventory: [],
        equippedWeapon: {
          name: 'Sword',
          type: WeaponType.Melee,
          attackPower: 4,
          accuracy: .8
        }
      },
      currentMob: {
        name: 'Giant Rat',
        type: CharacterType.Mob,
        stats: {
          strength: 2,
          dex: 3,
          arcana: 0,
          exp: 10,
          difficulty: 0.1
        },
        status: {
          maxHealth: 30,
          health: 30,
          maxMana: 1,
          mana: 1
        },
        inventory: [],
        equippedWeapon: {
          name: 'Claw',
          type: WeaponType.Melee,
          attackPower: 3,
          accuracy: .8
        }
      },
      log: []
    }
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    this.battleLogEvent('Welcome, ' + this.state.player.name + ', to Endless Dungeon.');
    this.battleLogEvent('You enter the dungeon and face an enemy ' + this.state.currentMob.name + '.');
  }

  battleLogEvent = (message: string) => {
    this.setState(state => ({ log: [...state.log, message] }));
  }

  changeTurn = (turn: CharacterType) => {
    this.setState({ currentTurn: turn})
  }

  playerAttack = () => {
    // TODO: add switch/case for different attack styles
    let min = this.state.player.stats.strength;
    let max = this.state.player.equippedWeapon.attackPower + this.state.player.stats.strength;
    let damage = this.calculateDamage(min, max);
    let newHealth = Math.max(this.state.currentMob.status.health - damage, 0);
    let attackRoll = Math.random();

    if (attackRoll <= this.state.player.equippedWeapon.accuracy) {
      this.setState((state) => ({
        currentMob: {
          ...state.currentMob,
          status: {
            ...state.currentMob.status,
            health: newHealth
          }
        }
      }));
      this.battleLogEvent('You attack with your ' + this.state.player.equippedWeapon.name + ', dealing ' + damage + ' damage.');
          
      if (newHealth === 0) {
        // CURRENT MOB KILLED
        // TODO: add xp gain
        this.battleLogEvent('You kill the ' + this.state.currentMob.name + '. You earned ' + this.state.currentMob.stats.exp + ' exp!');
        
        // end turn
        this.changeTurn(CharacterType.Mob);
        return;
      }
    } else {
      // attack misses
      this.battleLogEvent('You miss with your ' + this.state.player.equippedWeapon.name);
    }
    
      // end turn
      this.changeTurn(CharacterType.Mob);
      // TODO: figure out how to actually react to state.currentTurn === Mob
      setTimeout(this.mobAttack, 1000);
  }

  mobAttack = () => {
    let min = this.state.currentMob.stats.strength;
    let max = this.state.currentMob.equippedWeapon.attackPower + this.state.currentMob.stats.strength;
    let damage = this.calculateDamage(min, max);
    let newHealth = Math.max(this.state.player.status.health - damage, 0);
    let attackRoll = Math.random();

    if (attackRoll <= this.state.currentMob.equippedWeapon.accuracy) {
      this.setState((state) => ({
        player: {
          ...state.player,
          status: {
            ...state.player.status,
            health: newHealth
          }
        }
      }));
  
      this.battleLogEvent('The ' + this.state.currentMob.name + ' attacks you with it\'s ' + this.state.currentMob.equippedWeapon.name + ', dealing ' + damage + ' damage.');

      if (newHealth === 0) {
        // oh snap, you died!
        this.battleLogEvent('You were killed! Try again?');
        
        // end turn
        this.changeTurn(CharacterType.Player);
        return;
      }
    } else {
      // attack misses
      this.battleLogEvent('The ' + this.state.currentMob.name + ' misses with it\'s ' + this.state.currentMob.equippedWeapon.name);
    }
    // end turn
    this.changeTurn(CharacterType.Player);
  }

  calculateDamage = (min: number, max: number, type?: any) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  spawnNewMob = (newMob: Entity) => {
    this.battleLogEvent('You continue down deeper into the dungeon. You encounter a new enemy!')
    this.setState({ currentMob: newMob });
    // start player turn
    this.changeTurn(CharacterType.Player);
  }

  resetGame = () => {
    this.setState({
      currentTurn: CharacterType.Player,
      player: {
        name: 'Player',
        type: CharacterType.Player,
        stats: {
          strength: 5,
          dex: 5,
          arcana: 5,
          exp: 0
        },
        status: {
          maxHealth: 80,
          health: 80,
          maxMana: 50,
          mana: 50
        },
        inventory: [],
        equippedWeapon: {
          name: 'Sword',
          type: WeaponType.Melee,
          attackPower: 4,
          accuracy: .8
        }
      },
      currentMob: {
        name: 'Giant Rat',
        type: CharacterType.Mob,
        stats: {
          strength: 2,
          dex: 3,
          arcana: 0,
          exp: 10,
          difficulty: 0.1
        },
        status: {
          maxHealth: 30,
          health: 30,
          maxMana: 1,
          mana: 1
        },
        inventory: [],
        equippedWeapon: {
          name: 'Claw',
          type: WeaponType.Melee,
          attackPower: 3,
          accuracy: .8
        }
      },
      log: []
    });
    this.init();
  }

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

          <div className="battleLog">
            <BattleLog log={this.state.log}></BattleLog>
          </div>

          <div className="player">
            <EntityComponent {...this.state.player}></EntityComponent>
            <ActionMenu
              player={this.state.player}
              currentMob={this.state.currentMob}
              currentTurn={this.state.currentTurn}
              playerAttack={this.playerAttack}
              spawnNewMob={this.spawnNewMob}
              resetGame={this.resetGame}
            ></ActionMenu>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
