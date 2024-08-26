import { CategoryCard } from './components/CategoryCard';
import style from './style.module.scss';
import Image from 'next/image';

export const Category = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Choose A Category</h1>
      <div className={style.cards}>
        <CategoryCard
          iconSrc="/images/business.png"
          iconAlt="Business Card Icon"
          iconWidth={48}
          iconHeight={48}
          title="Business"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        />
        <CategoryCard
          iconSrc="/images/startup.png"
          iconAlt="Startup Card Icon"
          iconWidth={23}
          iconHeight={23}
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
      </div>
    </div>
  );
};
