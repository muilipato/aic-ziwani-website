import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <Router basename="/aic-ziwani-website">
      <Routes>
        <Route exact path = '/' element={<Home/>}></Route>
        <Route path ='/about' element = {<About/>}></Route>
      </Routes>
    </Router>
  
  );
}

export default App;
