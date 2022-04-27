import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/Header';

export default function Profile() {
  const history = useHistory();
  const getStorage = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />
      <Footer />
      <h4 data-testid="profile-email">
        {' '}
        { getStorage?.email }
        {' '}
      </h4>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes

      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes

      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleLogout }
      >
        Logout

      </button>
    </div>
  );
}
