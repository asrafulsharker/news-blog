import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar'
import {Switch , Route} from "react-router-dom";
import Home from './home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
<>
<Navbar/>
<Switch>
  <Route path="/" exact component={Home}/>
</Switch>
</>
  );
}

export default App;