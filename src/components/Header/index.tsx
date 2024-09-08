'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Routes } from '@/constants/routes';
import style from './style.module.scss';
import { Modal } from '../VideoModal';

export const Header = () => {
  const t = useTranslations();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleVideoButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={style.container}>
      <h1 className={style.title}> {t('Logo.title')}</h1>
      <div className={style.navigate_wrap}>
        <nav className={style.navigation}>
          <Link href={Routes.Home}>{t('Navbar.home')}</Link>
          <Link href={Routes.Blog}>{t('Navbar.blog')}</Link>
          <Link href={Routes.AboutUs}>{t('Navbar.about_us')}</Link>
          <Link href={Routes.ContactUs}>{t('Navbar.contact_us')}</Link>
        </nav>
        <button className={style.video_btn} onClick={handleVideoButtonClick}>
          {t('ModalVideo.btn_title')}
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
