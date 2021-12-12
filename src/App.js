import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// 76561198350848550 64bit tho
// 76561198067021926
// 76561197960265728

// 390582822 cabbeg mage
// 106756198 citius

const App = () => {
  const [playerId, setPlayerId] = useState('');
  const [player, setPlayer] = useState('');
  const getPlayer = (playerId) => {
    if(!playerId) return;
    // fetch(`/players/${playerId}`).then(
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
          onClick={() => getPlayer(playerId)}
        >
          Get Player
        </button>
      </header>
      {player && (
      <div className="playerInfo">
        <img src={player.profile.avatarfull} alt="player avatar" />
        <a target="_blank" rel="noreferrer" href={player.profile.profileurl} className="playerName">
          <h2>{player.profile.personaname}</h2>
        </a>
        <p className="mmr">MMR: {player.mmr_estimate.estimate}</p>
      </div>
      )}
    </div>
  );
}

export default App;
