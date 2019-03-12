import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import KingList from "./components/KingList";
import King from "./components/King";
import Queen from "./components/Queen";
import QueenList from "./components/QueenList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/queens">Queens</Link>
          <Link to="/kings">Kings</Link>
        </nav>
        <main>
          <Route exact path="/kings" component={KingList} />
          <Route exact path="/kings/:id" component={King} />
          <Route exact path="/queens" component={QueenList} />
          <Route exact path="/queens/:id" component={Queen} />
        </main>
      </div>
    );
  }
}

export default App;
