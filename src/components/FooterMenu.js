import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function FooterMenu() {
  return (
    <footer data-testid="footer" className="footer">
      <Link to="/drinks">
        <img data-testid="drinks-bottom-btn" alt="drinkIcon" src={ drinkIcon } />
      </Link>
      <Link to="/explore">
        <img data-testid="explore-bottom-btn" alt="exploreIcon" src={ exploreIcon } />
      </Link>
      <Link to="/meals">
        <img data-testid="food-bottom-btn" alt="mealIcon" src={ mealIcon } />
      </Link>
    </footer>
  );
}

export default FooterMenu;
