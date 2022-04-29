import PropTypes from 'prop-types';
import React from 'react';

export default function DoneRecipesFilters({ setFilter }) {
  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        value="All"
        onClick={ ({ target: { value } }) => setFilter(value) }
      >
        All
      </button>

      <button
        data-testid="filter-by-food-btn"
        type="button"
        value="Food"
        onClick={ ({ target: { value } }) => setFilter(value) }
      >
        Foods
      </button>

      <button
        data-testid="filter-by-drink-btn"
        type="button"
        value="Drink"
        onClick={ ({ target: { value } }) => setFilter(value) }
      >
        Drinks
      </button>
    </div>
  );
}

DoneRecipesFilters.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
