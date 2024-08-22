import React, { useState } from 'react';
import "./css/SignUpForm.css"

const QuizzieForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (name.trim() === '') {
      setNameError('Invalid name');
    } else {
      setNameError('');
    }

    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid Email');
    } else {
      setEmailError('');
    }

    if (password.trim() === '' || password.length < 8) {
      setPasswordError('Weak password');
    } else {
      setPasswordError('');
    }

    if (confirmPassword.trim() === '' || password !== confirmPassword) {
      setConfirmPasswordError('password doesn\'t match');
    } else {
      setConfirmPasswordError('');
    }

    // If there are no errors, submit the form
    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      console.log('Form submitted!');
      // You can replace this with your actual form submission logic
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>QUIZZIE</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="error">{nameError}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && (
              <span className="error">{confirmPasswordError}</span>
            )}
          </div>
          <button type="submit">Sign-Up</button>
          <div className="actions">
            <button className="signup-button">Sign Up</button>
            <button className="login-button">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizzieForm;
