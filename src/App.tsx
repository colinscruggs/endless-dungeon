import { Component } from 'react';
import './css/App.css';
import EntityComponent from './components/EntityComponent';
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
        equippedWeapon: {}
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
          </div>
        </div>

      </div>
    );
  }
}

export default App;
