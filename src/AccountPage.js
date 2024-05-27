import React from 'react';
import { useUser } from './UserContext';

const Account = () => {
  const { userData } = useUser();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header text-center bg-primary text-white">
              <h2>Account</h2>
            </div>
            <div className="card-body">
              {userData ? (
                <div className="text-center">
                  <div className="mb-4">
                    <i className="bi bi-person-circle" style={{ fontSize: '5rem', color: '#007bff' }}></i>
                  </div>
                  <p className="lead"><strong>Username:</strong> {userData.username}</p>
                  <p className="lead"><strong>Email:</strong> {userData.email}</p>
                  <p className="lead"><strong>Address:</strong> {userData.address}</p>
                  <p className="lead"><strong>Phone Number:</strong> {userData.phoneNumber}</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="lead">No user data available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
