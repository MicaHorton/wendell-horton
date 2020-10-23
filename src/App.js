import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Header from "./components/header.js";
import Navpage from "./components/navpage.js";

import Intro from "./components/intro.js";
import Prologue from "./components/prologue.js";

import Chapter1 from "./components/chapter1.js";
import Chapter2 from "./components/chapter2.js";
import Chapter3 from "./components/chapter3.js";
import Chapter4 from "./components/chapter4.js";
import Chapter5 from "./components/chapter5.js";
import Chapter6 from "./components/chapter6.js";
import Chapter7 from "./components/chapter7.js";
import Chapter8 from "./components/chapter8.js";
import Chapter9 from "./components/chapter9.js";
import Chapter10 from "./components/chapter10.js";
import Chapter11 from "./components/chapter11.js";


function App() {
  return (
    
    <Router>
      <Route path='/' component={Header}/>
      <Route path='/navpage' component={Navpage}/>

      <Route path='/' exact component={Intro}/>
      <Route path='/prologue' exact component={Prologue}/>
      <Route path='/chapter1' exact component={Chapter1}/>
      <Route path='/chapter2' exact component={Chapter2}/>
      <Route path='/chapter3' exact component={Chapter3}/>
      <Route path='/chapter4' exact component={Chapter4}/>
      <Route path='/chapter5' exact component={Chapter5}/>
      <Route path='/chapter6' exact component={Chapter6}/>
      <Route path='/chapter7' exact component={Chapter7}/>
      <Route path='/chapter8' exact component={Chapter8}/>
      <Route path='/chapter9' exact component={Chapter9}/>
      <Route path='/chapter10' exact component={Chapter10}/>
      <Route path='/chapter11' exact component={Chapter11}/>
    
    </Router>

 
  );
}

export default App;
