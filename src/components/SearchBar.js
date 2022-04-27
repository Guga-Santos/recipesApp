import React from 'react';

export default function SearchBar() {
  return (
    <div className="searchBar-container">
      <input
        type="text"
        placeholder="Search..."
        data-testid="search-input"
      />
      <label htmlFor="filters">
        <input
          type="radio"
          name="filters"
          value="ingredient"
          data-testid="ingredient-search-radio"
        />
        Ingredient
        <input
          type="radio"
          name="filters"
          value="name"
          data-testid="name-search-radio"
        />
        Name
        <input
          type="radio"
          name="filters"
          value="first-letter"
          data-testid="first-letter-search-radio"
        />
        First Letter
      </label>
    </div>
  );
}
