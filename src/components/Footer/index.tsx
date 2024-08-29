'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/UI/Button';
import style from './style.module.scss';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        to_email: email,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      );

      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.wrap}>
          <h1 className={style.title}>Modsen Client Blog</h1>
          <div className={style.navigate_wrap}>
            <nav className={style.navigation}>
              <Link href="/">Home</Link>
              <Link href="/blogPage">Blog</Link>
              <Link href="about">About Us</Link>
              <Link href="/contactPage">Contact Us</Link>
              <Link href="privacy-policy">Privacy Policy</Link>
            </nav>
          </div>
        </div>

        <div className={style.subscription}>
          <h2 className={style.sub_text}>
            Subscribe to our newsletter to get the latest updates and news
          </h2>
          <form className={style.inputWrapper} onSubmit={handleSubscribe}>
            <input
              className={style.input}
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleInputChange}
              required
            />

            <div className={style.btnWrapper}>
              <Button variant="primary" size="large" icon={null} type="submit">
                {isSubscribed ? 'Done' : 'Subscribe'}
              </Button>
            </div>
          </form>
        </div>

        <div className={style.bottom}>
          <div className={style.address}>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className={style.socials}>
            <a href="https://facebook.com">
              <Image
                src="/images/FaceBookGrey.png"
                alt="FaceBook Logo"
                width={16}
                height={16}
              />
            </a>
            <a href="https://twitter.com">
              <Image
                src="/images/TwitterGrey.png"
                alt="Twitter Logo"
                width={16}
                height={16}
              />
            </a>
            <a href="https://instagram.com">
              <Image
                src="/images/InstagramGrey.png"
                alt="Instagram Logo"
                width={16}
                height={16}
              />
            </a>
            <a href="https://linkedin.com">
              <Image
                src="/images/LinkedInGrey.png"
                alt="LinkedIn Logo"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
