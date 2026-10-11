import logo from './logo.svg';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
