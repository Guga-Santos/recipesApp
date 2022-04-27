import React from 'react';
<<<<<<< HEAD
import Footer from '../components/footer';
=======
import { useHistory } from 'react-router-dom';
>>>>>>> main-group-7
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
<<<<<<< HEAD
      <Footer />
=======
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
>>>>>>> main-group-7
    </div>
  );
}
