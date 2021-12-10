import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// 76561198350848550

const App = () => {
  const [playerId, setPlayerId] = useState('');
  const [player, setPlayer] = useState('');
  const getPlayer = (playerId) => {
    if(!playerId) return;
    fetch(`https://api.opendota.com/api/players/${playerId}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then((data) => {
      setPlayer(data);
    })
    .catch(err => {
      throw new Error(err)
    });
  };

  console.log(playerId);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <label>Player ID:</label>
          <br />
          <input 
            name='playerId' 
            type='text'
            value={playerId}
            onChange={e => setPlayerId(e.target.value)}
          />
        </form>
        <button
          onClick={getPlayer(playerId)}
        >
          Get Player
        </button>
      </header>
      <p>{Object.keys(player).join(' ')}</p>
    </div>
  );
}

export default App;
