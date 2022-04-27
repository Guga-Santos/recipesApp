import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import MealIcon from '../images/mealIcon.svg';
import './footer.css';

function Footer() {
  return (
    <div className="footer_container" data-testid="footer">
      <a href="/drinks">
        <img
          src={ DrinkIcon }
          alt="Drink Icon"
          data-testid="drinks-bottom-btn"
          className="footer_icons"
        />
      </a>
      <a href="/explore">
        <img
          src={ ExploreIcon }
          alt="Explore Icon"
          data-testid="explore-bottom-btn"
          className="footer_icons"
        />
      </a>
      <a href="/foods">
        <img
          src={ MealIcon }
          alt="meal Icon"
          data-testid="food-bottom-btn"
          className="footer_icons"
        />
      </a>
    </div>
  );
}

export default Footer;
