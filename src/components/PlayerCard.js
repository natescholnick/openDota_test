import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  if (!player) return null;
  return (
    <div className="playerInfo">
      <img src={player.profile.avatarfull} alt="player avatar" />
      <a target="_blank" rel="noreferrer" href={player.profile.profileurl} className="playerName">
        <h2>{player.profile.personaname}</h2>
      </a>
      <p className="mmr">MMR: {player.mmr_estimate.estimate}</p>
    </div>
  )
}

export default PlayerCard;