// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Admin from './component/Admin';
import JoinUs from './component/JoinUs';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/JoinUs' element={<JoinUs/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
