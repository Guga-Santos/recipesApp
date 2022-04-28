import React, { useContext } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

export default function ExploreNationalities() {
  const contexto = useContext(AppContext);
  const {
    recipes: { nacionalidades },
    selectedCATEG,
    setSelectedCATEG,
  } = contexto;

  return (
    <div>
      <Header title="Explore Nationalities" hasSearch />
      <select
        value={ selectedCATEG }
        onChange={ ({ target }) => setSelectedCATEG(target.value) }
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
    </div>
  );
}
