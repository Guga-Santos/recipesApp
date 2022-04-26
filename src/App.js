import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/food" />
      <Route path="/drinks" />
      <Route path="/foods/{id-da-receita}" />
      <Route path="/drinks/{id-da-receita}" />
      <Route path="/foods/{id-da-receita}/in-progress" />
      <Route path="/drinks/{id-da-receita}/in-progress" />
      <Route path="/explore" />
      <Route path="/explore/foods" />
      <Route path="/explore/drinks" />
      <Route path="/explore/foods/ingredients" />
      <Route path="/explore/drinks/ingredients" />
      <Route path="/explore/foods/nationalities" />
      <Route path="/profile" />
      <Route path="/done-recipes" />
      <Route path="/favorite-recipes" />
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
