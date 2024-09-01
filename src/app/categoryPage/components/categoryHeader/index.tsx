'use client';

import { SlArrowRight } from 'react-icons/sl';
import style from './style.module.scss';

export const CategoryHeader = () => (
  <div className={style.container}>
    <div className={style.text_wrap}>
      <h1 className={style.title}>Business</h1>
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <p className={style.sub_text}>
        Blog <SlArrowRight className={style.icon} /> Business
      </p>
    </div>
  </div>
);
