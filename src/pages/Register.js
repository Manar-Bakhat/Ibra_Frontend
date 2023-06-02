import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/components/Register.css';
import logo from '../images/logo.png'; // Chemin vers votre image de logo

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeInput, setActiveInput] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajouter ici la logique pour traiter les informations d'inscription
  };

  const isInputActive = (value) => {
    return value !== '';
  };

  return (
    <div className="container-fixed mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="logo-container text-center">
            <img src={logo} alt="Logo" className="logo" style={{ width: '150px', height: '150px' }} />
          </div>
          <div className="card mx-auto card-custom bg-white shadow-sm" style={{ width: '360px' }}>
            <div className="card-body">
              <h4 className="card-title mb-4 text-darkgray title-create-account">Create Account</h4>
              <form onSubmit={handleSubmit}>
                <div className={`mb-3 ${isInputActive(username) ? 'active' : ''}`}>
                  <input
                    className={`form-control ${activeInput === 'username' ? 'border-green' : 'border-grey'}`}
                    style={{
                      backgroundColor: activeInput === 'username' ? 'white' : '#f5f5f5',
                      border: activeInput === 'username' ? '1px solid green' : '1px solid grey',
                    }}
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    onFocus={() => handleInputFocus('username')}
                    onBlur={handleInputBlur}
                    required
                  />
                </div>
                <div className={`mb-3 d-flex ${isInputActive(countryCode) ? 'active' : ''}`}>
                  <input
                    className={`form-control country-code-input ${activeInput === 'countryCode' ? 'border-green' : 'border-grey'}`}
                    style={{
                      width: '70px',
                      marginRight: '10px',
                      backgroundColor: activeInput === 'countryCode' ? 'white' : '#f5f5f5',
                      border: activeInput === 'countryCode' ? '1px solid green' : '1px solid grey',
                    }}
                    placeholder="+212"
                    type="text"
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    onFocus={() => handleInputFocus('countryCode')}
                    onBlur={handleInputBlur}
                    required
                  />
                  <input
                    className={`form-control phone-number-input ${activeInput === 'phoneNumber' ? 'border-green' : 'border-grey'}`}
                    style={{
                      backgroundColor: activeInput === 'phoneNumber' ? 'white' : '#f5f5f5',
                      border: activeInput === 'phoneNumber' ? '1px solid green' : '1px solid grey',
                    }}
                    placeholder="Phone Number"
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    onFocus={() => handleInputFocus('phoneNumber')}
                    onBlur={handleInputBlur}
                    required
                  />
                </div>
                <div className={`mb-3 ${isInputActive(email) ? 'active' : ''}`}>
                  <input
                    className={`form-control ${activeInput === 'email' ? 'border-green' : 'border-grey'}`}
                    style={{
                      backgroundColor: activeInput === 'email' ? 'white' : '#f5f5f5',
                      border: activeInput === 'email' ? '1px solid green' : '1px solid grey',
                    }}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={() => handleInputFocus('email')}
                    onBlur={handleInputBlur}
                    required
                  />
                </div>
                <div className={`mb-3 ${isInputActive(password) ? 'active' : ''}`}>
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
                    required
                  />
                </div>
                <div className={`mb-3 ${isInputActive(confirmPassword) ? 'active' : ''}`}>
                  <input
                    className={`form-control ${activeInput === 'confirmPassword' ? 'border-green' : 'border-grey'}`}
                    style={{
                      backgroundColor: activeInput === 'confirmPassword' ? 'white' : '#f5f5f5',
                      border: activeInput === 'confirmPassword' ? '1px solid green' : '1px solid grey',
                    }}
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    onFocus={() => handleInputFocus('confirmPassword')}
                    onBlur={handleInputBlur}
                    required
                  />
                </div>
                <div className="mb-4">
                  <button type="submit" className="btn btn-primary w-100 custom-button">
                    Register
                  </button>
                </div>
              </form>
              <p className="text-center">
                Already have an account? <a href="/login" className="login-text">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
