'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/Constants/testimonials';
import style from './style.module.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [_, setDirection] = useState(0);

  const handlePrevClick = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <h5 className={style.sub_title}>TESTIMONIALS</h5>
        <h2 className={style.title}>What people say about our blog</h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className={style.rightSection}>
        <p className={style.testimonialText}>{currentTestimonial.text}</p>

        <div className={style.authorSection}>
          <div className={style.profile}>
            <Image
              src={currentTestimonial.avatar}
              alt={`${currentTestimonial.author} Avatar`}
              width={48}
              height={48}
              className={style.avatar}
            />
            <div className={style.authorInfo}>
              <h3 className={style.name}>{currentTestimonial.author}</h3>
              <p className={style.location}>{currentTestimonial.location}</p>
            </div>
          </div>
          <div className={style.navigation}>
            <button className={style.navButton} onClick={handlePrevClick}>
              <span className={style.navArrow}>&larr;</span>
            </button>
            <button className={style.navButton} onClick={handleNextClick}>
              <span className={style.navArrow}>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
