import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Real Estate</span>
        </a>
        <a href="/"> Home</a>
        <a href="/"> About</a>
        <a href="/"> Contact</a>
        <a href="/"> Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
              alt=""
            />
            <span>Jon Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {' '}
            <a href="/">Login</a>
            <a href="/" className="register">
              Register
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Login</a>
          <a href="/">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
