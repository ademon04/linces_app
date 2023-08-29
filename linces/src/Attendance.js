import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { NavLink, useParams } from 'react-router-dom';

function Attendance() {
  const params = useParams();

  // Hooks
  const [timeOfAttendance, setTimeOfAttendance] = useState('');
  const [gymAttendance, setGymAttendance] = useState('');
  const [numberOfCatches, setNumberOfCatches] = useState('');
  const [isTimeOfAttendanceSubmitted, setIsTimeOfAttendanceSubmitted] = useState(false);

  function submitAttendance() {

    if (!isTimeOfAttendanceSubmitted && !timeOfAttendance) {
      alert('Please fill in  Date field.');
      return;
    };
    if (!isTimeOfAttendanceSubmitted) {
      const attendance = {
        timeOfAttendance: timeOfAttendance,
        postId: params.postId,
      };
      

      axios
        .post(`http://localhost:3000/players/${params.postId}`, attendance)
        
        .then(res => {
          
          alert("W4E",res.data);
          setIsTimeOfAttendanceSubmitted(true);
          setTimeOfAttendance(''); // Limpiar el valor después de enviarlo
        })
        .catch(err => console.log(err));

        
    } else {
      const attendance = {
        gymAttendance: gymAttendance,
        numberOfCatches: numberOfCatches,
        postId: params.postId,
      };

      

      


      axios
        .post(`http://localhost:3000/players/${params.postId}`, attendance)
        .then(res => {
          alert("W4E",res.data);
          setGymAttendance(''); // Limpiar el valor después de enviarlo
          setNumberOfCatches(''); // Limpiar el valor después de enviarlo
          window.location.href = '/';
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <h2 className="mt-4">Attendance</h2>
      </div>
      <div className="row">
        <div className='col-sm-6 offset-3'>
          {!isTimeOfAttendanceSubmitted && (
            <div className='mb-3'>
              <label htmlFor="Date" className="form-label">Date</label>
              <input
                type="datetime-local"
                className="form-control"
                value={timeOfAttendance}
                placeholder="Date"
                onChange={(e) => setTimeOfAttendance(e.target.value)}
              />
                          <button onClick={submitAttendance} className="btn btn-succes">Send</button>
            </div>
          )}

          {isTimeOfAttendanceSubmitted && (
            <div className='mb-3'>
              <label htmlFor='gymAttendance' className='form-label'>Gym</label>
              <input
                type='boolean'
                className='form-control'
                value={gymAttendance}
                placeholder="Gym"
                onChange={(e) => setGymAttendance(e.target.value)}
              />
            </div>
          )}

          {isTimeOfAttendanceSubmitted && (
            <div className='mb-3'>
              <label htmlFor='numberOfCatches' className='form-label'>Number of catches</label>
              <input
                type='number'
                className='form-control'
                value={numberOfCatches}
                placeholder="Number of catches"
                onChange={(e) => setNumberOfCatches(e.target.value)}
              />
              <button onClick={submitAttendance} className="btn btn-success">Send</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Attendance;
