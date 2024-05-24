import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`th-menu-wrapper ${mobileMenuOpen ? 'show-mobile-menu' : ''}`}>
      <div className="th-menu-area">
        <div className="mobile-logo">
          <Link to="/"><img src="https://html.themeholy.com/laun/demo/assets/img/logo.svg" alt="Laun" /></Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li className="menu-item-has-children">
              <Link to="/">Home</Link>
              <ul className="sub-menu">
                <li><Link to="/laundry-services">Laundry Services</Link></li>
                <li><Link to="/dry-cleaning">Home Dry Cleaning</Link></li>
                <li><Link to="/laundry-dry-services">Laundry & Dry Services</Link></li>
              </ul>
            </li>
            <li><Link to="/about">About Us</Link></li>
            <li className="menu-item-has-children">
              <Link to="/services">Service</Link>
              <ul className="sub-menu">
                <li><Link to="/services">Service</Link></li>
                <li><Link to="/service-details">Service Details</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="/pages">Pages</Link>
              <ul className="sub-menu">
                <li className="menu-item-has-children">
                  <Link to="/shop">Shop</Link>
                  <ul className="sub-menu">
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/shop-details">Shop Details</Link></li>
                    <li><Link to="/cart">Cart Page</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                  </ul>
                </li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/team-details">Team Details</Link></li>
                <li><Link to="/gallery">Proto Gallery</Link></li>
                <li><Link to="/faq">Faq Page</Link></li>
                <li><Link to="/price">Price Package</Link></li>
                <li><Link to="/error">Error Page</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="/blogs">Blogs</Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/blog-layout">Blog Layout</Link>
                  <ul className="sub-menu">
                    <li><Link to="/blog-grid-2-columns">Blog Grid 02 Columns</Link></li>
                    <li><Link to="/blog-grid-3-columns">Blog Grid 03 Columns</Link></li>
                    <li><Link to="/blog-list">Blog List</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/blog-sidebar">Blog Sidebar</Link>
                  <ul className="sub-menu">
                    <li><Link to="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                    <li><Link to="/blog-right-sidebar">Blog Right Sidebar</Link></li>
                    <li><Link to="/blog">Blog No Sidebar</Link></li>
                  </ul>
                </li>
                <li><Link to="/blog-details">Blog Details</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-button">
          <button type="button" className="icon-btn searchBoxToggler"><i className="far fa-search"></i></button>
          <Link to="#" className="icon-btn sideMenuToggler"><i className="far fa-bars"></i></Link>
          <Link to="/contact" className="th-btn style4 th-radius">Schedule A Pickup</Link>
        </div>
        <button className="th-menu-toggle" onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? "fal fa-times" : "far fa-bars"}></i>
        </button>
      </div>
      <div className="th-mobile-menu">
        <ul>
          <li className="menu-item-has-children">
            <Link to="/">Home</Link>
            <ul className="sub-menu">
              <li><Link to="/laundry-services">Laundry Services</Link></li>
              <li><Link to="/dry-cleaning">Home Dry Cleaning</Link></li>
              <li><Link to="/laundry-dry-services">Laundry & Dry Services</Link></li>
            </ul>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <li className="menu-item-has-children">
            <Link to="/services">Service</Link>
            <ul className="sub-menu">
              <li><Link to="/services">Service</Link></li>
              <li><Link to="/service-details">Service Details</Link></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link to="/pages">Pages</Link>
            <ul className="sub-menu">
              <li className="menu-item-has-children">
                <Link to="/shop">Shop</Link>
                <ul className="sub-menu">
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/shop-details">Shop Details</Link></li>
                  <li><Link to="/cart">Cart Page</Link></li>
                  <li><Link to="/checkout">Checkout</Link></li>
                  <li><Link to="/wishlist">Wishlist</Link></li>
                </ul>
              </li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/team-details">Team Details</Link></li>
              <li><Link to="/gallery">Proto Gallery</Link></li>
              <li><Link to="/faq">Faq Page</Link></li>
              <li><Link to="/price">Price Package</Link></li>
              <li><Link to="/error">Error Page</Link></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link to="/blogs">Blogs</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/blog-layout">Blog Layout</Link>
                <ul className="sub-menu">
                  <li><Link to="/blog-grid-2-columns">Blog Grid 02 Columns</Link></li>
                  <li><Link to="/blog-grid-3-columns">Blog Grid 03 Columns</Link></li>
                  <li><Link to="/blog-list">Blog List</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/blog-sidebar">Blog Sidebar</Link>
                <ul className="sub-menu">
                  <li><Link to="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                  <li><Link to="/blog-right-sidebar">Blog Right Sidebar</Link></li>
                  <li><Link to="/blog">Blog No Sidebar</Link></li>
                </ul>
              </li>
              <li><Link to="/blog-details">Blog Details</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
