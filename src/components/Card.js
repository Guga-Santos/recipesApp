import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const MAGICNUMBER = 12;

export default function Card() {
  const contexto = useContext(AppContext);
  const { searchData } = contexto;

  const foodOrDrink = Object.keys(searchData)[0];

  return (
    foodOrDrink === 'drinks'
      ? searchData.drinks.map((obj, index) => index < MAGICNUMBER && (
        <div data-testid={ `${index}-recipe-card` } key={ index }>
          <img
            src={ obj.strDrinkThumb }
            alt="imagem do drink"
            className="card-img"
            data-testid={ `${index}-card-img` }
          />
          <h4 data-testid={ `${index}-card-name` }>{obj.strDrink}</h4>
        </div>
      ))
      : searchData.meals.map((obj, index) => index < MAGICNUMBER && (
        <div data-testid={ `${index}-recipe-card` } key={ index }>
          <img
            src={ obj.strMealThumb }
            alt="imagem do drink"
            className="card-img"
            data-testid={ `${index}-card-img` }
          />
          <h4 data-testid={ `${index}-card-name` }>{obj.strMeal}</h4>
        </div>
      ))
  );
}
