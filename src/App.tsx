import React, { Component } from 'react';
import './App.css';
import EntityComponent from './components/EntityComponent';
import Entity from './types/Entity';
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
        health: 100,
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
        health: 100,
        mana: 50
      },
      inventory: [],
      equippedWeapon: {}
    }
  }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Endless Dungeon</h1>
          <EntityComponent entity={this.state.player}></EntityComponent>
        </header>
      </div>
    );
  }
}

export default App;
