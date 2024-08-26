import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.scss';
import Button from '@/UI/Button';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.wrap}>
          <h1 className={style.title}>Modsen Client Blog</h1>
          <div className={style.navigate_wrap}>
            <nav className={style.navigation}>
              <Link href="/home">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </nav>
          </div>
        </div>

        <div className={style.subscription}>
          <h2 className={style.sub_text}>
            Subscribe to our newsletter to get the latest updates and news
          </h2>
          <div className={style.inputWrapper}>
            <input
              className={style.input}
              type="email"
              placeholder="Enter Your Email"
            />
            <div className={style.btnWrapper}>
              <Button
                className={style.btn}
                variant="primary"
                size="medium"
                icon={null}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className={style.bottom}>
          <div className={style.address}>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className={style.socials}>
            <a href="https://facebook.com">
              <Image
                src="/images/FaceBook.png"
                alt="FaceBook Logo"
                width={24}
                height={24}
              />
            </a>
            <a href="https://twitter.com">
              <Image
                src="/images/Twitter.png"
                alt="Twitter Logo"
                width={24}
                height={24}
              />
            </a>
            <a href="https://instagram.com">
              <Image
                src="/images/Instagram.png"
                alt="Instagram Logo"
                width={24}
                height={24}
              />
            </a>
            <a href="https://linkedin.com">
              <Image
                src="/images/LinkedIn.png"
                alt="LinkedIn Logo"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
