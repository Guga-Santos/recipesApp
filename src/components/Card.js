import React from 'react';

const MAGICNUMBER = 12;

export default function Card({ data }) {
  // const history = useHistory();

  // if (data?.length === 1 && foodOrDrink) {
  //   history.push(`/foods/${data[0].idMeal}`);
  // }

  if (data === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }

  return (
    data && data.map((obj, index) => index < MAGICNUMBER && (
      <div data-testid={ `${index}-recipe-card` } key={ index }>
        <img
          src={ data[0].strMeal === undefined ? obj.strDrinkThumb : obj.strMealThumb }
          alt="imagem"
          className="card-img"
          data-testid={ `${index}-card-img` }
        />
        <h4
          data-testid={ `${index}-card-name` }
        >
          {data[0].strMeal === undefined ? obj.strDrink : obj.strMeal}

        </h4>
      </div>
    )));
}
