import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import fetchFilterByCategory from '../services/fetchFilterByCategory';

export default function ExploreNationalities() {
  const [dataToCard, setDataToCard] = useState([]);
  const [selectedCATEG, setSelectedCATEG] = useState('American');
  const [renderCard, setRenderCard] = useState(false);

  const contexto = useContext(AppContext);
  const { recipes: { nacionalidades } } = contexto;

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchFilterByCategory(selectedCATEG);
      setDataToCard(data);
      setRenderCard(true);
    };

    fetchAPI();
  }, [selectedCATEG]);

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
