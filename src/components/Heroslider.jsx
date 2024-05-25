import React from 'react';
import './heroslider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const HeroSlider = () => {
  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <Swiper
        className="th-slider hero-slider-1"
        id="heroSlide1"
        modules={[Navigation]}
        navigation={{
          prevEl: '.slider-arrow.prev',
          nextEl: '.slider-arrow.next'
        }}
        effect="slide"
      >
        <SwiperSlide>
          <div className="hero-inner">
            <div className="th-hero-bg" style={{ backgroundImage: "url('https://html.themeholy.com/laun/demo/assets/img/hero/hero_bg_1_1.jpg')" }}>
              <img src="https://html.themeholy.com/laun/demo/assets/img/hero/hero_overlay_1.png" alt="Hero Image" />
              <div className="bubble"></div>
            </div>
            <div className="container">
              <div className="hero-style1">
                <span className="sub-title style1" data-ani="slideinup" data-ani-delay="0.5s">We Clean, You Shine</span>
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.6s">Quality Laundry Every Thread</h1>
                <p className="hero-text text-white" data-ani="slideinup" data-ani-delay="0.7s">The best slogan for your laundry service will depend on your specific brand, target audience, and the unique qualities of your service.</p>
                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.9s">
                  <a href="about.html" className="th-btn style2" data-ani="slideinup" data-ani-delay="0.9s">Discover More</a>
                  <a href="contact.html" className="th-btn style5" data-ani="slideinup" data-ani-delay="0.9s">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-inner">
            <div className="th-hero-bg" style={{ backgroundImage: "url('https://html.themeholy.com/laun/demo/assets/img/hero/hero_bg_1_2.jpg')" }}>
              <img src="https://html.themeholy.com/laun/demo/assets/img/hero/hero_overlay_1.png" alt="Hero Image" />
              <div className="bubble"></div>
            </div>
            <div className="container">
              <div className="hero-style1">
                <span className="sub-title style1" data-ani="slideinup" data-ani-delay="0.5s">We Clean, You Shine</span>
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.6s">Quality Laundry Every Thread</h1>
                <p className="hero-text text-white" data-ani="slideinup" data-ani-delay="0.7s">The best slogan for your laundry service will depend on your specific brand, target audience, and the unique qualities of your service.</p>
                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.9s">
                  <a href="about.html" className="th-btn style2" data-ani="slideinup" data-ani-delay="0.9s">Discover More</a>
                  <a href="contact.html" className="th-btn style5" data-ani="slideinup" data-ani-delay="0.9s">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-inner">
            <div className="th-hero-bg" style={{ backgroundImage: "url('https://html.themeholy.com/laun/demo/assets/img/hero/hero_bg_1_3.jpg')" }}>
              <img src="https://html.themeholy.com/laun/demo/assets/img/hero/hero_overlay_1.png" alt="Hero Image" />
              <div className="bubble"></div>
            </div>
            <div className="container">
              <div className="hero-style1">
                <span className="sub-title style1" data-ani="slideinup" data-ani-delay="0.5s">We Clean, You Shine</span>
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.6s">Quality Laundry Every Thread</h1>
                <p className="hero-text text-white" data-ani="slideinup" data-ani-delay="0.7s">The best slogan for your laundry service will depend on your specific brand, target audience, and the unique qualities of your service.</p>
                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.9s">
                  <a href="about.html" className="th-btn style2" data-ani="slideinup" data-ani-delay="0.9s">Discover More</a>
                  <a href="contact.html" className="th-btn style5" data-ani="slideinup" data-ani-delay="0.9s">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="hero-animated-bubble">
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/bubble_1.png" alt="Laun" />
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/bubble_2.png" alt="Laun" />
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/bubble_3.png" alt="Laun" />
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/bubble_4.png" alt="Laun" />
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/bubble_5.png" alt="Laun" />
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/bubble_6.png" alt="Laun" />
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/bubble_7.png" alt="Laun" />
        <img src="https://html.themeholy.com/laun/demo/assets/img/shape/bubble_8.png" alt="Laun" />
      </div>
      <div className="icon-box">
        <button data-slider-prev="#heroSlide1" className="slider-arrow default prev"><i className="far fa-arrow-left"></i></button>
        <button data-slider-next="#heroSlide1" className="slider-arrow default next"><i className="far fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default HeroSlider;
