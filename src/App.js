import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import Login from './pages/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
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
    </Router>

  );
}

export default App;
