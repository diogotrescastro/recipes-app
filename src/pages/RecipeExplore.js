import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import { getRandomDrink } from '../services/theCockTailAPI';
import { getRandomMeal } from '../services/theMealAPI';

const RecipeExplore = () => {
  const { pathname } = useLocation();
  const [randomSurprise, setRandomSurprise] = useState('');
  const exploremeals = '/explore/meals';
  const title = pathname.includes('meals') ? 'explore meals' : 'explore drinks';

  useEffect(() => {
    if (pathname === exploremeals) {
      getRandomMeal()
        .then((result) => setRandomSurprise(result));
    } else {
      getRandomDrink()
        .then((result) => setRandomSurprise(result));
    }
  }, [pathname]);
  return (
    <>
      <Header title={ title } />
      <div className="explore-div">
        <Link to={ `${pathname}/Ingredients` }>
          <button
            type="button"
            data-testid="explore-by-ingredient"
            className="explore-btn"
          >
            By Ingredients
          </button>
        </Link>
        { (pathname === exploremeals)
          ? (
            <Link to="/explore/meals/area">
              <button
                type="button"
                data-testid="explore-by-area"
                className="explore-btn"
              >
                By Place of Origin
              </button>
            </Link>)
          : null}
        <Link
          to={
            pathname === exploremeals
              ? `/meals/${randomSurprise}` : `/drinks/${randomSurprise}`
          }
        >
          <button
            data-testid="explore-surprise"
            onClick={ () => {} }
            type="button"
            className="explore-btn"
          >
            Surprise Me!
          </button>
        </Link>
      </div>
      <FooterMenu />
    </>
  );
};

export default RecipeExplore;
