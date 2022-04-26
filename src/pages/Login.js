import React, { useState } from 'react';

function Login() {
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [enableButton, setEnableButton] = useState(true);

  const activeButton = () => {
    const mingLength = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    const checkEmail = emailRegex.test(emailValue);
    const passwordLength = passwordValue.length > mingLength;
    if (checkEmail && passwordLength) {
      setEnableButton(false);
    } else { setEnableButton(true); }
  };

  const changePaswordValue = (target) => {
    setPasswordValue(target.value);
    activeButton();
  };

  const changeEmailValue = ({ target }) => {
    setEmailValue(target.value);
    activeButton();
  };

  return (
    <section>
      <input
        type="text"
        data-testid="email-input"
        value={ emailValue }
        onChange={ changeEmailValue }
      />
      <input
        type="text"
        data-testid="password-input"
        onChange={ ({ target }) => { changePaswordValue(target); } }
        value={ passwordValue }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ enableButton }
      >
        Login
      </button>
    </section>
  );
}

export default Login;
