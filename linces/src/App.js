import './App.css';
import PlayerList from './PlayerList';
import Attendance from './Attendance';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/' > 
            Linces WR APP 
          </a>
          
          
         
        </div>
      </nav>

     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PlayerList />} exact></Route>
          <Route path='/players/:postId' element={<Attendance />} exact></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
