import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="th-header header-layout1">
      <div className="header-top">
        <div className="container th-container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-auto d-none d-md-block">
              <div className="header-links style2">
                <p className="header-notice text-theme">Welcome to Laundry Service & Dry Cleaning</p>
                <ul>
                  <li><i className="fa-solid fa-phone"></i>Phone: <a href="tel:+1636543569">+163-654-3569</a></li>
                  <li><i className="fa-solid fa-envelope"></i>Email: <a href="mailto:info@laun.com">info@laun.com</a></li>
                  <li className="d-none d-xl-inline-block"><i className="fa-solid fa-clock"></i>Opening Hours: <span>Monday to Saturday (9:00 AM - 8:00 PM)</span></li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="social-links">
                
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
