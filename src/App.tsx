import React, { Component } from 'react';
import './css/App.css';
import EntityComponent from './components/EntityComponent';
import ActionMenu from './components/ActionMenu';
import State from './types/State';

class App extends Component<any, State> {
  constructor(props: any) {
    super(props);
     // THIS IS THE MAIN STATE I GUESS
    this.state = {
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
          attackPower: 5
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
        equippedWeapon: {}
      }
    }
  }

  playerAttack = () => {
    let max = this.state.player.equippedWeapon.attackPower + this.state.player.stats.strength;
    let min = this.state.player.stats.strength;
    let damage = Math.floor(Math.random() * (max - min) + min)

    this.setState({
      ...this.state,
      currentMob: {
        ...this.state.currentMob,
        status: {
          ...this.state.currentMob.status,
          health: Math.max(this.state.currentMob.status.health - damage, 0)
        }
      }
    })
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
            <ActionMenu playerAttack={this.playerAttack}></ActionMenu>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
