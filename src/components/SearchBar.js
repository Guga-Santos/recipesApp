import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function SearchBar() {
  const location = useLocation();

  const contexto = useContext(AppContext);
  const {
    getSearchType,
    getQuery,
    query,
    searchFilter,
    fetchSearchOnClick } = contexto;

  return (
    <div className="searchBar-container">
      <input
        type="text"
        placeholder="Search..."
        data-testid="search-input"
        value={ query }
        onChange={ (e) => getQuery(e) }
      />
      <label htmlFor="filters">
        <input
          type="radio"
          name="filters"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ (e) => getSearchType(e) }
        />
        Ingredient
        <input
          type="radio"
          name="filters"
          value="name"
          data-testid="name-search-radio"
          onChange={ (e) => getSearchType(e) }
        />
        Name
        <input
          type="radio"
          name="filters"
          value="first-letter"
          data-testid="first-letter-search-radio"
          onChange={ (e) => getSearchType(e) }
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => fetchSearchOnClick(location.pathname) }
      >
        Search
      </button>
      { searchFilter === 'first-letter'
      && query.length > 1
      && global.alert('Your search must have only 1 (one) character')}
    </div>
  );
}
