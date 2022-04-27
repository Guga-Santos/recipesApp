import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';
import SearchBar from './SearchBar';

export default function Header() {
  const location = useLocation();
  const pathInfo = location.pathname;
  const history = useHistory();

  const [search, setSearch] = useState(false);

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

  return (
    <div className="header-and-filters">
      <div className="header-container">
        <button
          type="button"
          data-testid="profile-top-btn"
          src={ profileIcon }
          onClick={ () => history.push('/profile') }
        >
          <img src={ profileIcon } alt="" />
        </button>
        <h1 data-testid="page-title">{ title }</h1>
        {validate && (
          <button
            type="button"
            data-testid="search-top-btn"
            src={ searchIcon }
            onClick={ () => setSearch(!search) }
          >
            <img src={ searchIcon } alt="" />
          </button>)}
      </div>
      {search && <SearchBar /> }
    </div>
  );
}
