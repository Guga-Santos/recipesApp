import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />
        <Route
          path="/foods"
          render={ (props) => <Foods { ...props } /> }
        />
        <Route
          path="/drinks"
          render={ (props) => <Drinks { ...props } /> }
        />
        <Route
          path="/foods/{id-da-receita}"
        />
        <Route
          path="/drinks/{id-da-receita}"
        />
        <Route
          path="/foods/{id-da-receita}/in-progress"
        />
        <Route
          path="/drinks/{id-da-receita}/in-progress"
        />
        <Route
          path="/explore"
          component={ Explore }
        />
        <Route
          path="/explore/foods"
          component={ ExploreFoods }
        />
        <Route
          path="/explore/drinks"
        />
        <Route
          path="/explore/foods/ingredients"
          component={ ExploreFoodsIngredients }
        />
        <Route
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksIngredients }
        />
        <Route
          path="/explore/foods/nationalities"
          component={ ExploreNationalities }
        />
        <Route
          path="/profile"
          component={ Profile }
        />
        <Route
          path="/done-recipes"
          component={ DoneRecipes }
        />
        <Route
          path="/favorite-recipes"
          component={ FavoriteRecipes }
        />
      </Switch>
    </div>
  );
}

export default App;
