import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IndividualPlayer from './IndividualPlayer';

function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/players')
      .then(res => {
        console.log(res.data);
        setPlayers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const playerList = players.map(player => (
    <div className='card' key={player._id}>
      <IndividualPlayer player={player} />
    </div>
  ));

  return (
    <div>
      <h2>WR's 2023</h2>
      {playerList}
    </div>
  );
}

export default PlayersList;
