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
  const [nationalitiesAll, setNationalitiesAll] = useState([]);
  const contexto = useContext(AppContext);
  const { recipes: { nacionalidades } } = contexto;

  useEffect(() => {
    if (dataToCard.length > 0) {
      setRenderCard(true);
    }
  }, [dataToCard]);

  useEffect(() => {
    if (nacionalidades !== undefined && nationalitiesAll.length === 0) {
      console.log(nationalitiesAll.length);
      console.log('inclui o all');
      const allOption = { strArea: 'All' };
      const allInclude = [...nacionalidades, allOption];
      setNationalitiesAll(allInclude);
    }
  }, [nacionalidades]);

  const fetchFirst12Recipes = async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const promise = await fetch(URL);
    const response = await promise.json();
    setDataToCard(await response.meals);
  };

  useEffect(() => {
    fetchFirst12Recipes();
  }, []);

  useEffect(() => {
    const filterRecipesByNationality = async () => {
      const data = await fetchFilterByCategory(selectedCATEG);
      setDataToCard(data);
    };
    if (renderCategory) {
      if (selectedCATEG === 'All') {
        fetchFirst12Recipes();
      } else {
        filterRecipesByNationality();
        setRenderCategory(false);
      }
    }
  }, [selectedCATEG]);

  const handleChange = ({ target }) => {
    console.log(target.value);
    setRenderCard(false);
    setSelectedCATEG(target.value);
    setRenderCategory(true);
  };

  return (
    <div>
      <Header title="Explore Nationalities" hasSearch />
      <select
        value={ selectedCATEG }
        onChange={ (e) => handleChange(e) }
        data-testid="explore-by-nationality-dropdown"
      >
        {nationalitiesAll && nationalitiesAll.map((srt) => (
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
