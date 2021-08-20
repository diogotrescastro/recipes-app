import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../context/MainContext';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import { getDrinksIngredients } from '../services/theCockTailAPI';
import { getMealsIngredients } from '../services/theMealAPI';
import RecipesCardsContainer from '../components/RecipesCardsContainer';
import DrinkLoader from '../components/DrinkLoader';
import FoodLoader from '../components/FoodLoader';

const RecipeExploreIngredients = () => {
  const { pathname } = useLocation();
  const exploremeals = '/explore/meals/Ingredients';
  const { setData, loading, setLoading } = useContext(MainContext);

  useEffect(() => {
    setLoading(true);
    if (exploremeals === pathname) {
      getMealsIngredients()
        .then((result) => {
          setLoading(false);
          return setData(result);
        });
    } else {
      getDrinksIngredients()
        .then((result) => {
          setLoading(false);
          return setData(result);
        });
    }
  }, [pathname, setData, setLoading]);

  function loader() {
    return pathname.includes('drinks')
      ? <DrinkLoader /> : <FoodLoader />;
  }

  return (
    loading ? loader() : (
      <>
        <Header title="explore Ingredients" />
        <RecipesCardsContainer test="ingredient" />
        <FooterMenu />
      </>
    )
  );
};

export default RecipeExploreIngredients;
