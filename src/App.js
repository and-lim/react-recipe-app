import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

function App() {
  return (
    <Router> 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/recipe' element={<Recipe/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
