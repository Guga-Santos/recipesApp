import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import MealIcon from '../images/mealIcon.svg';
import './footer.css';

function Footer() {
  return (
    <div className="footer_main" data-testid="footer">
      <a data-testid="drinks-bottom-btn" href="/drinks">
        <img src={ DrinkIcon } alt="Drink Icon" className="footer_icons" />
      </a>
      <a data-testid="explore-bottom-btn" href="/explore">
        <img src={ ExploreIcon } alt="Explore Icon" className="footer_icons" />
      </a>
      <a data-testid="food-bottom-btn" href="/food">
        <img src={ MealIcon } alt="meal Icon" className="footer_icons" />
      </a>
    </div>
  );
}

export default Footer;
