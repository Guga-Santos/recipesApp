import React, { useContext } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/footer';
import AppContext from '../context/AppContext';

export default function Drinks() {
  const contexto = useContext(AppContext);
  const { validateCARD } = contexto;
  return (
    <div>
      <Header />
      <Footer />
      { validateCARD && <Card /> }
    </div>
  );
}
