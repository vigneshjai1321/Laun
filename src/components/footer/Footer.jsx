import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout1" style={{ backgroundImage: 'url(https://html.themeholy.com/laun/demo/assets/img/bg/footer_bg_1.jpg)' }}>
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            {/* Company Information */}
            <div className="col-lg-6 col-xl-4">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="home-laundry-services.html"><img src="https://html.themeholy.com/laun/demo/assets/img/logo-white.svg" alt="Laun" /></a>
                  </div>
                  <p className="about-text">
                    Begin by scheduling your laundry service. You can choose from our convenient options. Any visible stains are pre-treated to ensure.
                  </p>
                  <div className="footer-info-wrapper">
                    <div className="footer-info">
                      <div className="footer-info_icon"><i className="fa-sharp fa-solid fa-phone"></i></div>
                      <a className="text-inherit" href="tel:+256214203215">+256 214 203 215</a>
                    </div>
                    <div className="footer-info">
                      <div className="footer-info_icon"><i className="fas fa-envelope"></i></div>
                      <a className="text-inherit" href="mailto:info@laun.com">info@laun.com</a>
                    </div>
                    <div className="footer-info">
                      <div className="footer-info_icon"><i className="fa-solid fa-clock"></i></div>
                      <span>Monday to Saturday: 9AM - 8PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Services Menu */}
            <div className="col-lg-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu style2">
                    <li><a href="service.html">Dry Cleaning</a></li>
                    <li><a href="service.html">Quick Wash Express</a></li>
                    <li><a href="service.html">Dust Removal</a></li>
                    <li><a href="service.html">Stain Master Pro</a></li>
                    <li><a href="service.html">Damage Repair</a></li>
                    <li><a href="service.html">Eco Fresh Laundry</a></li>
                    <li><a href="service.html">Sanitize Clothes</a></li>
                    <li><a href="service.html">Bright Blitz Laundry</a></li>
                    <li><a href="service.html">Carpet Rinse</a></li>
                    <li><a href="service.html">Pure Care Laundering</a></li>
                    <li><a href="service.html">Laundry Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Newsletter Sign-Up */}
            <div className="col-lg-6 col-xl-auto">
              <div className="widget footer-widget">
                <div className="newsletter-widget style2">
                  <h4 className="box-title text-white">Sign Up For Newsletter</h4>
                  <div className="footer-search-contact mt-25">
                    <form>
                      <input className="form-control" type="email" placeholder="Enter your email" />
                    </form>
                    <div className="footer-btn mt-10">
                      <button type="submit" className="th-btn style2 btn-fw">Subscribe Now</button>
                    </div>
                    <div className="form-group mt-20">
                      <input type="checkbox" id="html" />
                      <label htmlFor="html">I agree to all terms and policies</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright and Social Media */}
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-2 align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright"></i> 2023 
                <a href="home-laundry-services.html">Laun</a>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="th-social">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a> 
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a> 
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Visual Elements */}
      <div className="animation-bubble">
        <div className="bubble-1"></div>
        <div className="bubble-2"></div>
        <div className="bubble-3"></div>
        <div className="bubble-4"></div>
        <div className="bubble-5"></div>
        <div className="bubble-6"></div>
        <div className="bubble-7"></div>
        <div className="bubble-8"></div>
        <div className="bubble-9"></div>
        <div className="bubble-10"></div>
      </div>
      <div className="shape-mockup jump d-none d-xl-block" style={{ bottom: '0%', left: '0%' }}>
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/footer_shape_1.png" alt="shape" />
      </div>
      <div className="shape-mockup jump d-none d-xl-block" style={{ bottom: '0%', right: '0%' }}>
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/footer_shape_2.png" alt="shape" />
      </div>
      {/* Scroll to Top Button */}
      <div className="scroll-top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919' }}></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
