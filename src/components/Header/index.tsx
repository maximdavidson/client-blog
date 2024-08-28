'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import { Modal } from '../VideoModal';

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
      <div className={style.navigate_wrap}>
        <nav className={style.navigation}>
          <Link href="/">Home</Link>
          <Link href="blog">Blog</Link>
          <Link href="about">About Us</Link>
          <Link href="contactPage">Contact Us</Link>
        </nav>
        <button className={style.video_btn} onClick={handleVideoButtonClick}>
          Video about us
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc="/videos/videoplayback.mp4"
      />
    </header>
  );
};
