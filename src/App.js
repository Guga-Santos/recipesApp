import React from 'react';
import { Switch, Router } from 'react-router-dom';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Router exact path="/" />
      <Router path="/food" />
      <Router path="/drinks" />
      <Router path="/foods/{id-da-receita}" />
      <Router path="/drinks/{id-da-receita}" />
      <Router path="/foods/{id-da-receita}/in-progress" />
      <Router path="/drinks/{id-da-receita}/in-progress" />
      <Router path="/explore" />
      <Router path="/explore/foods" />
      <Router path="/explore/drinks" />
      <Router path="/explore/foods/ingredients" />
      <Router path="/explore/drinks/ingredients" />
      <Router path="/explore/foods/nationalities" />
      <Router path="/profile" />
      <Router path="/done-recipes" />
      <Router path="/favorite-recipes" />
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
    </Switch>
  );
}

export default App;
