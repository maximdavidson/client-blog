'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { categories } from '@/constants/categories';
import { Routes } from '@/constants/routes';
import { Link } from '@/navigation';
import { CategoryCard } from './components/CategoryCard';
import style from './style.module.scss';

export const Category = () => {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      className={`${style.container} ${isVisible ? style.fadeIn : ''}`}
      ref={ref}
    >
      {isVisible && (
        <>
          <h1 className={`${style.title} ${style.fadeInUp}`}>
            {t('CategoriesSection.chooseACategory')}
          </h1>
          <div className={`${style.cardsContainer} ${style.fadeInUp}`}>
            {categories.map(({ key, iconSrc }) => (
              <div key={key}>
                <Link className={style.link} href={`${Routes.Category}/${key}`}>
                  <CategoryCard
                    iconSrc={iconSrc}
                    iconAlt={t(`Categories.${key}`) + ' Card Icon'}
                    iconWidth={48}
                    iconHeight={48}
                    title={t(`Categories.${key}`)}
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                  />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
