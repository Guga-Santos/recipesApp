import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DoneRecipes from './pages/DoneRecipes';
import DrinkDetails from './pages/DrinkDetails';
import Drinks from './pages/Drinks';
import DrinksRecipesInProgress from './pages/DrinksRecipesInProgress';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodDetails from './pages/FoodDetails';
import Foods from './pages/Foods';
import FoodsRecipesInProgress from './pages/FoodsRecipesInProgress';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
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
          path="/foods/:id/in-progress"
          component={ FoodsRecipesInProgress }
        />
        <Route
          path="/drinks/:id/in-progress"
          component={ DrinksRecipesInProgress }
        />
        <Route
          path="/foods/:id"
          component={ FoodDetails }
        />
        <Route
          path="/drinks/:id"
          component={ DrinkDetails }
        />
        <Route
          path="/foods"
          component={ Foods }
        />
        <Route
          path="/drinks"
          component={ Drinks }
        />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodsIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreNationalities }
        />
        <Route
          path="/explore/drinks/nationalities"
          component={ NotFound }
        />
        <Route
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksIngredients }
        />
        <Route
          path="/explore/foods"
          component={ ExploreFoods }
        />
        <Route
          path="/explore/drinks"
          component={ ExploreDrinks }
        />
        <Route
          path="/explore"
          component={ Explore }
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
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
