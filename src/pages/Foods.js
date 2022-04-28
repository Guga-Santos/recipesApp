import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

export default function Foods() {
  const contexto = useContext(AppContext);
  const { validateCARD, searchData } = contexto;

  return (
    <div>
      <Header title="Foods" hasSearch />
      { validateCARD && <Card data={ searchData.meals } type="Foods" /> }
      <Footer />
    </div>
  );
}
