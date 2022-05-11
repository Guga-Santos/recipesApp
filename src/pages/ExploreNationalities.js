import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import fetchFilterByCategory from '../services/fetchFilterByCategory';

export default function ExploreNationalities() {
  const [dataToCard, setDataToCard] = useState([]);
  const [selectedCATEG, setSelectedCATEG] = useState('Italian');
  const [renderCard, setRenderCard] = useState(false);
  const [renderCategory, setRenderCategory] = useState(false);

  const contexto = useContext(AppContext);
  const { recipes: { nacionalidades } } = contexto;

  useEffect(() => {
    if (dataToCard.length > 0) {
      setRenderCard(true);
    }
  }, [dataToCard]);

  useEffect(() => {
    const fetchFirst12Recipes = async () => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const promise = await fetch(URL);
      const response = await promise.json();
      setDataToCard(await response.meals);
    };
    fetchFirst12Recipes();
  }, []);

  const filterRecipesByNationality = async () => {
    console.log(selectedCATEG);
    const data = await fetchFilterByCategory(selectedCATEG);
    setDataToCard(data);
  };

  useEffect(() => {
    if (renderCategory) {
      console.log('mudei a categoria');
      filterRecipesByNationality();
      setRenderCategory(!renderCategory);
    }
  }, [selectedCATEG]);

  const handleChange = ({ target }) => {
    console.log(target.value);
    setRenderCard(false);
    setSelectedCATEG(target.value);
    setRenderCategory(!renderCategory);
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
