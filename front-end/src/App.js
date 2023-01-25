
import './App.css';
import Navbar from './Pages/Navbar';
import Admin from './Pages/Admin';
import JoinUs from './Pages/JoinUs';
import Home from './Pages/Home';
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
