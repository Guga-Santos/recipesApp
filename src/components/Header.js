import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';
import SearchBar from './SearchBar';

export default function Header({ title, hasSearch }) {
  const history = useHistory();

  const [search, setSearch] = useState(false);

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
        {hasSearch && (
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasSearch: PropTypes.bool.isRequired,
};
