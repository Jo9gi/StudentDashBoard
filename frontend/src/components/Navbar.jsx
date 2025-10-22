import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          🎓 Student Dashboard
        </a>
        
        {user && (
          <div className="navbar-nav ms-auto">
            <span className="navbar-text me-3">
              Welcome, {user.name}!
            </span>
            <button 
              className="btn btn-outline-light btn-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;