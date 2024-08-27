import Image from 'next/image';
import style from './style.module.scss';

export const Testimonial = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <h5 className={style.sub_title}>TESTIMONIALS</h5>
        <h2 className={style.title}>What people say about our blog</h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className={style.rightSection}>
        <p className={style.testimonialText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className={style.authorSection}>
          <div className={style.profile}>
            <Image
              src="/images/Jonathan_Vallem.png"
              alt="Jonathan Vallem Avatar"
              width={48}
              height={48}
              className={style.avatar}
            />
            <div className={style.authorInfo}>
              <h3 className={style.name}>Jonathan Vallem</h3>
              <p className={style.location}>New York, USA</p>
            </div>
          </div>
          <div className={style.navigation}>
            <button className={style.navButton}>
              <span className={style.navArrow}>&larr;</span>
            </button>
            <button className={style.navButton}>
              <span className={style.navArrow}>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
