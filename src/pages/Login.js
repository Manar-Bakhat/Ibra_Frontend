import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/components/Login.css';
import logo from '../images/logo.png'; // Chemin vers votre image de logo

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeInput, setActiveInput] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajouter ici la logique pour traiter les informations de connexion
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="logo-container text-center">
            <img src={logo} alt="Logo" className="logo" style={{ width: '150px', height: '150px' }} />
          </div>
          <div className="card mx-auto card-custom bg-white shadow-sm" style={{ width: '360px' }}>
            <div className="card-body">
              <h4 className="card-title mb-4 text-darkgray title-signin">Sign in</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    className={`form-control ${activeInput === 'username' ? 'border-green' : 'border-grey'}`}
                    style={{
                      backgroundColor: activeInput === 'username' ? 'white' : '#f5f5f5',
                      border: activeInput === 'username' ? '1px solid green' : '1px solid grey',
                    }}
                    placeholder="Username or email"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    onFocus={() => handleInputFocus('username')}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className={`form-control ${activeInput === 'password' ? 'border-green' : 'border-grey'}`}
                    style={{
                      backgroundColor: activeInput === 'password' ? 'white' : '#f5f5f5',
                      border: activeInput === 'password' ? '1px solid green' : '1px solid grey',
                    }}
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    onFocus={() => handleInputFocus('password')}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input remember-checkbox" />
                    <label className="form-check-label">Remember</label>
                  </div>
                  <div className="forgot-password-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="text-muted forgot-password">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mb-4">
                  <button type="submit" className="btn btn-primary w-100 custom-button">
                    Login
                  </button>
                </div>
              </form>
           
              <p className="text-center mb-4">
                Don't have an account? <a href="/signup" className="signup-text">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
