import React from 'react';
import { Link } from 'react-router-dom';
/*import axios from 'axios';*/
/*import PlayersList from './PlayerList';*/
function IndividualPlayer({ player})
 {


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <ul className='list-group'>
            <li className='list-group-item'>{player.name}</li>
            <li className='list-group-item'>{player.secondName}</li>
            <li className='list-group-item'>{player.jerseyNumber}</li>



          </ul>
          <Link to={`/players/${player._id}`}>
            <li className='btn btn-success'>Attendance</li>
          </Link>
          &nbsp;
          <hr className='mt-4'></hr>
        </div>
      </div>
    </div>
  );
}
export default IndividualPlayer;
