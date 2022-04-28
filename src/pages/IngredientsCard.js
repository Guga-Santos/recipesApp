import React from 'react';

const MAGIC_NUMBER = 12;

export default function IngredientsCard({ data, type }) {
  return (

    data && data.map((str, i) => i < MAGIC_NUMBER && (
      <div key={ i } data-testid={ `${i}-ingredient-card` }>
        <img
          src={ type === 'meal'
            ? `https://www.the${type}db.com/images/ingredients/${str.strIngredient}-Small.png`
            : `https://www.the${type}db.com/images/ingredients/${str.strIngredient1}-Small.png` }
          alt="Imagem do ingrediente"
          data-testid={ `${i}-card-img` }
        />
        <h3
          data-testid={ `${i}-card-name` }
        >
          {type === 'meal' ? str.strIngredient : str.strIngredient1 }

        </h3>
      </div>
    ))
  );
}
