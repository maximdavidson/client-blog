'use client';
import { useTranslations } from 'next-intl';
import { SlArrowRight } from 'react-icons/sl';
import style from './style.module.scss';

interface CategoryHeaderProps {
  category: string;
}

export const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  const t = useTranslations();

  return (
    <div className={style.container}>
      <div className={style.text_wrap}>
        <h1 className={style.title}>
          {t(`Categories.${category.toLowerCase()}`)}
        </h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <p className={style.sub_text}>
          Blog <SlArrowRight className={style.icon} />
          {t(`Categories.${category.toLowerCase()}`)}
        </p>
      </div>
    </div>
  );
};
