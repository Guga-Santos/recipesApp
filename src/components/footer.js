import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import MealIcon from '../images/mealIcon.svg';
import './footer.css';

function Footer() {
  return (
    <div className="footer_container" data-testid="footer">
      <Link to="/drinks">
        <img
          src={ DrinkIcon }
          alt="Drink Icon"
          data-testid="drinks-bottom-btn"
          className="footer_icons"
          style={ { pointerEvents: 'auto' } }
        />
      </Link>
      <Link to="/explore">
        <img
          src={ ExploreIcon }
          alt="Explore Icon"
          data-testid="explore-bottom-btn"
          className="footer_icons"
          style={ { pointerEvents: 'auto' } }
        />
      </Link>
      <Link to="/foods">
        <img
          src={ MealIcon }
          alt="meal Icon"
          data-testid="food-bottom-btn"
          className="footer_icons"
          style={ { pointerEvents: 'auto' } }
        />
      </Link>
    </div>
  );
}

export default Footer;
