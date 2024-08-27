'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Modal } from '../VideoModal';
import style from './style.module.scss';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleVideoButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={style.container}>
      <h1 className={style.title}>Modsen Client Blog</h1>
      <div className={style.navigate_wrap} onClick={handleVideoButtonClick}>
        <nav className={style.navigation}>
          <Link href="home">Home</Link>
          <Link href="blog">Blog</Link>
          <Link href="about">About Us</Link>
          <Link href="contact">Contact Us</Link>
        </nav>
        <button className={style.video_btn}>Video about us</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc="/videos/videoplayback.mp4"
      />
    </header>
  );
};
