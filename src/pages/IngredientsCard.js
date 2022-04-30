import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

const MAGIC_NUMBER = 12;
const SEG = 1000;

export default function IngredientsCard({ data, type }) {
  const history = useHistory();
  const contexto = useContext(AppContext);
  const {
    setExploreIngredients,
    setIngredient,
  } = contexto;

  const handleClick = (e) => {
    e.preventDefault();
    setIngredient(e.target.id);
    setExploreIngredients(true);

    setTimeout(() => {
      history.push(type === 'meal' ? '/foods' : '/drinks');
    }, SEG);
  };

  return (

    data && data.map((str, i) => i < MAGIC_NUMBER && (
      <div className="card-div" key={ i } data-testid={ `${i}-ingredient-card` }>
        <Link
          to="/"
          id={ type === 'meal' ? str.strIngredient : str.strIngredient1 }
          onClick={ handleClick }
        >
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
        </Link>
      </div>
    ))
  );
}
