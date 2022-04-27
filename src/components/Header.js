import React from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const location = useLocation();
  const pathInfo = location.pathname;
  const history = useHistory();

  let title = '';
  let validate = true;

  switch (pathInfo) {
  case '/foods':
    title = 'Foods';
    break;
  case '/drinks':
    title = 'Drinks';
    break;
  case '/profile':
    title = 'Profile';
    validate = false;
    break;
  case '/done-recipes':
    title = 'Done Recipes';
    validate = false;
    break;
  case '/favorite-recipes':
    title = 'Favorite Recipes';
    validate = false;
    break;
  case '/explore':
    title = 'Explore';
    validate = false;
    break;
  case '/explore/foods':
    title = 'Explore Foods';
    validate = false;
    break;
  case '/explore/drinks':
    title = 'Explore Drinks';
    validate = false;
    break;
  case '/explore/drinks/ingredients':
    title = 'Explore Ingredients';
    validate = false;
    break;
  case '/explore/foods/ingredients':
    title = 'Explore Ingredients';
    validate = 0;
    break;
  case '/explore/foods/nationalities':
    title = 'Explore Nationalities';
    break;
  default:
    return null;
  }

  const clickToProfile = () => {
    history.push('/profile');
  };

  return (
    <div className="header-container">
      <button
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
        onClick={ clickToProfile }
      >
        <img src={ profileIcon } alt="" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      {validate && (
        <button
          type="button"
          data-testid="search-top-btn"
          src={ searchIcon }
        >
          <img src={ searchIcon } alt="" />
        </button>)}

    </div>
  );
}
