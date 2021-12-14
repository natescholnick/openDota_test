import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';
import logo from './logo.svg';
import './App.css';

// 76561198350848550 64bit tho
// 76561198067021926
// 76561197960265728

// 390582822 cabeezy
// 106756198 citius

const App = () => {
  const [playerId, setPlayerId] = useState('');
  const [player, setPlayer] = useState('');
  const getPlayer = (playerId) => {
    if(!playerId) return;
    fetch(`/players/${playerId}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then((data) => {
      console.log(data);
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
        <form onSubmit={(e) => {
          e.preventDefault();
          getPlayer(playerId);
        }}>
          <label>Player ID:</label>
          <br />
          <input 
            name='playerId' 
            type='text'
            value={playerId}
            onChange={e => setPlayerId(e.target.value)}
          />
          <input className="getPlayerButton" type='submit' value="Get Player" />
        </form>
      </header>
      <PlayerCard player={player} />
    </div>
  );
}

export default App;
