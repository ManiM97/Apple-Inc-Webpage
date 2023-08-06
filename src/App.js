import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/project' element={<Project/>} />
        </Routes>
    </div>
  );
}

export default App;
