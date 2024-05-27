import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const Signup = () => {
  const { updateUser } = useUser();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = { username, email, phoneNumber, address, password };
    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      updateUser(data);
      window.alert('Signup successful! Redirecting to login page...');
      navigate('/login');
    } catch (error) {
      console.error('There was an error registering!', error);
      alert('Error registering, please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Signup</h2>
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    className="form-control"
                    required
                    minLength={3}
                    maxLength={20}
                    pattern="^[a-zA-Z0-9_]+$"
                    title="Username should be 3-20 characters long and contain only letters, numbers, and underscores."
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="form-control"
                    required
                    pattern="^\+?[0-9]{10}$"
                    title="Phone number should be 10 digits and can include a leading +."
                  />
                </div>
                <div className="form-group">
                  <label>Address:</label>
                  <input
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                    className="form-control"
                    required
                    minLength={10}
                    maxLength={100}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control"
                    required
                    minLength={8}
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$"
                    title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number."
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Signup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
