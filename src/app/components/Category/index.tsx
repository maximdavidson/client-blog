'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
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
          <div>
            <Link className={style.cards} href="/categoryPage">
              <CategoryCard
                iconSrc="/images/business.png"
                iconAlt="Business Card Icon"
                iconWidth={48}
                iconHeight={48}
                title="Business"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
              <CategoryCard
                iconSrc="/images/shuttle.png"
                iconAlt="Startup Card Icon"
                iconWidth={48}
                iconHeight={48}
                title="Startup"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
              <CategoryCard
                iconSrc="/images/economy.png"
                iconAlt="Economy Card Icon"
                iconWidth={48}
                iconHeight={48}
                title="Economy"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
              <CategoryCard
                iconSrc="/images/technology.png"
                iconAlt="Technology Card Icon"
                iconWidth={48}
                iconHeight={48}
                title="Technology"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
