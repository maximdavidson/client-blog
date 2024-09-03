'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { categories } from '@/constants/categories';
import { CategoryCard } from './components/CategoryCard';
import style from './style.module.scss';

const Category = () => {
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
          <h1 className={style.title}>Choose A Category</h1>
          <div className={style.cardsContainer}>
            {categories.map(({ title, iconSrc }) => (
              <div key={title}>
                <Link className={style.link} href={`/categoryPage/${title}`}>
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

export default Category;
