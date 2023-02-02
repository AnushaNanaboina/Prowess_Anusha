import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Users from './Components/Users';
import Challenges from './Components/Challenges';
import Scoreboard from './Components/Scoreboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Header></Header> 
     <Login></Login>
      <Register></Register>
    <Users></Users> */}
      
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/user" element={<Users></Users>}/>
          <Route path="/challanges" element={<Challenges></Challenges>} />
          <Route path="/scoreboard" element={<Scoreboard></Scoreboard>} />
          <Route path="/register" element={<Register></Register>} />
        </Routes>
      </BrowserRouter>
         {/* <Login></Login> */}
         {/* <Challenges></Challenges> */}
         {/* <Scoreboard></Scoreboard> */}
    </div>
 );
}

export default App;
