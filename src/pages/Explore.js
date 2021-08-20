import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

const Explore = () => (
  <>
    <Header title="explore" />
    <div className="explore-div">
      <Link to="/explore/meals">
        <button
          type="button"
          data-testid="explore-food"
          className="explore-btn"
        >
          explore meals
        </button>
      </Link>
      <Link to="/explore/drinks">
        <button
          type="button"
          data-testid="explore-drinks"
          className="explore-btn"
        >
          explore drinks
        </button>
      </Link>
    </div>
    <FooterMenu />
  </>
);

export default Explore;
