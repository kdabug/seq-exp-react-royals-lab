import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from "react-router-dom";
import KingList from './components/KingList'
import King from './components/King'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/kings">Kings</Link>
        </nav>
        <main>
          <Route exact path="/kings" component={KingList}/>
          <Route exact path="/kings/:id" component={King}/>
        </main>
      </div>
    );
  }
}

export default App;
