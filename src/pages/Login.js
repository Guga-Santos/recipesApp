import React from 'react';

export default function Login() {
  return (
    <div className="login-container">
      <label htmlFor="input-email">
        Email:
        <input
          type="email"
          id="input-email"
          data-testid="email-input"
        />
      </label>
      <label htmlFor="input-email">
        Password:
        <input
          type="email"
          id="input-password"
          data-testid="password-input"
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Enter

      </button>
    </div>
  );
}
