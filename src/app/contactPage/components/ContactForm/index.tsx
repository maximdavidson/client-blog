'use client';

import { useState } from 'react';
import Button from '@/UI/Button';
import emailjs from '@emailjs/browser';
import style from './style.module.scss';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    queryRelated: '',
    message: '',
  });

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        to_email: formData.email,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      );

      setIsSubscribed(true);
      setFormData({
        fullName: '',
        email: '',
        queryRelated: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.text_wrapper}>
        <h3 className={style.sub_title}>Contact us</h3>
        <h1 className={style.title}>Let’s Start a Conversation</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <div className={style.section}>
        <div className={style.left_column}>
          <h4 className={style.ltitle}>Working hours</h4>
          <div className={style.line}></div>
          <p className={style.date_text}>Monday To Friday</p>
          <p className={style.date_text}>9:00 AM to 8:00 PM </p>
          <p className={style.sup_text}>Our Support Team is available 24/7</p>
        </div>
        <div className={style.right_column}>
          <h4 className={style.ltitle}>Contact Us</h4>
          <div className={style.line}></div>
          <p className={style.date_text}>020 7993 2905</p>
          <p className={style.sup_text}>hello@finsweet.com</p>
        </div>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="queryRelated"
          value={formData.queryRelated}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Query Related
          </option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button variant="primary" size="large" icon={null} type="submit">
          {isSubscribed ? 'Done' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};
