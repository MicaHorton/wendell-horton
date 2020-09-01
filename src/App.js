import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.js";
import Intro from "./components/intro.js";
import Chapter4 from "./components/chapter4.js";

function App() {
  return (
    
    <Router>
      <Route path='/' component={Navbar}/>
      <Route path='/' exact component={Intro}/>
      <Route path='/chapter4' exact component={Chapter4}/>
    </Router>

 
  );
}

export default App;
