import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

export default function ExploreNationalities(props) {
  const [dataToCard, setDataToCard] = useState([]);
  const [selectedCATEG, setSelectedCATEG] = useState('Italian');
  const [renderCard, setRenderCard] = useState(false);
  const { location } = props;
  const id = location.pathname.split('/')[2];
  console.log(props);

  const contexto = useContext(AppContext);
  const { recipes: { nacionalidades } } = contexto;

  const fetchRecipesByCategory = async (category, type) => {
    const url = {
      '/foods': `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`,
      '/drinks': 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka',
    };
    try {
      const response = await fetch(url[type]);
      const data = await response.json();
      console.log(data);
      if (type === '/foods') {
        return data.meals;
      }
      return data.drinks;
    } catch (error) {
      return Error(error);
    }
  };

  useEffect(() => {
    if (dataToCard.length > 0) {
      setRenderCard(true);
    }
  }, [dataToCard]);

  useEffect(() => {
    const fetchAPI = async () => {
      console.log(selectedCATEG);
      console.log(`/${id}`);
      const data = await fetchRecipesByCategory(selectedCATEG, `/${id}`);
      setDataToCard(data);
    };
    fetchAPI();
    console.log(id);
  }, [selectedCATEG, id]);

  const handleChange = ({ target }) => {
    setRenderCard(false);
    setSelectedCATEG(target.value);
    setDataToCard(target.value);
  };

  return (
    <div>
      <Header title="Explore Nationalities" hasSearch />
      <select
        value={ selectedCATEG }
        onChange={ (e) => handleChange(e) }
        data-testid="explore-by-nationality-dropdown"
      >
        {nacionalidades && nacionalidades.map((srt) => (
          <option
            data-testid={ `${srt.strArea}-option` }
            key={ srt.strArea }
            value={ srt.strArea }
          >
            {srt.strArea}
          </option>
        ))}
      </select>
      { renderCard && <Card data={ dataToCard } type="Foods" /> }
      <Footer />
    </div>
  );
}

ExploreNationalities.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};
