import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import RecipeDetails from '../pages/RecipeDetails';
import FoodRecipeInProgress from '../pages/FoodRecipeInProgress';
import DrinkRecipeInProgress from '../pages/DrinkRecipeInProgress';
import Explore from '../pages/Explore';
import RecipeExplore from '../pages/RecipeExplore';
import RecipeExploreIngredients from '../pages/RecipeExploreIngredients';
import RecipeExploreArea from '../pages/RecipeExploreArea';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoritesRecipes from '../pages/FavoritesRecipes';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={ Login }
    />
    <Route
      exact
      path="/meals"
      component={ Foods }
    />
    <Route
      exact
      path="/drinks"
      component={ Drinks }
    />
    <Route
      exact
      path={ ['/meals/:id', '/drinks/:id'] }
      component={ RecipeDetails }
    />
    <Route
      exact
      path="/meals/:id/in-progress"
      component={ FoodRecipeInProgress }
    />
    <Route
      exact
      path="/drinks/:id/in-progress"
      component={ DrinkRecipeInProgress }
    />
    <Route
      exact
      path="/explore"
      component={ Explore }
    />
    <Route
      exact
      path={ ['/explore/meals', '/explore/drinks'] }
      component={ RecipeExplore }
    />
    <Route
      exact
      path={ ['/explore/meals/Ingredients', '/explore/drinks/Ingredients'] }
      component={ RecipeExploreIngredients }
    />
    <Route
      exact
      path="/explore/meals/area"
      component={ RecipeExploreArea }
    />
    <Route
      exact
      path="/profile"
      component={ Profile }
    />
    <Route
      exact
      path="/done-recipes"
      component={ DoneRecipes }
    />
    <Route
      exact
      path="/favorite-recipes"
      component={ FavoritesRecipes }
    />
    <Route
      component={ NotFound }
    />
  </Switch>
);

export default Routes;
