import PropTypes from 'prop-types';
import React from 'react';

const NUMBER_OF_BUTTONS = 5;

export default function CategoriesList({ categoriesList, filter }) {
  return (
    <section>
      <button
        onClick={ ({ target: { value } }) => filter(value) }
        value="All"
        type="button"
      >
        All
      </button>
      { categoriesList.map(({ strCategory }, index) => (
        index < NUMBER_OF_BUTTONS && (
          <button
            type="button"
            key={ `${strCategory}` }
            value={ strCategory }
            data-testid={ `${index}-category-filter` }
            onClick={ ({ target: { value } }) => filter(value) }
          >
            {strCategory}
          </button>)))}
    </section>
  );
}

CategoriesList.propTypes = {
  categoriesList: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  filter: PropTypes.func.isRequired,
};
