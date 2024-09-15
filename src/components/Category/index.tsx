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
    <div className={style.container} ref={ref}>
      {isVisible && (
        <>
          <h1 className={style.title}>
            {t('CategoriesSection.chooseACategory')}
          </h1>
          <div className={style.cardsContainer}>
            {categories.map(({ title, iconSrc }) => (
              <div key={title}>
                <Link
                  className={style.link}
                  href={`${Routes.Category}/${title}`}
                >
                  <CategoryCard
                    iconSrc={iconSrc}
                    iconAlt={`${title} Card Icon`}
                    iconWidth={48}
                    iconHeight={48}
                    title={title}
                    description={`Posts about ${title}.`}
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
