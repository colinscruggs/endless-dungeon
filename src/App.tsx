import './App.css';
import EntityComponent from './components/EntityComponent';
import Entity from './types/Entity';
import State from './types/State';

function App() {
  // THIS IS THE MAIN STATE I GUESS
  const entityProps: State = {
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Endless Dungeon</h1>
        <EntityComponent></EntityComponent>
      </header>
    </div>
  );
}

export default App;
