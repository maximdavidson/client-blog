import style from './style.module.scss';
import Image from 'next/image';

export const Category = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Choose A Catagory</h1>
      <div className={style.cards}>
        <div className={style.card}>
          <Image
            src="/images/business.png"
            alt="Business Card Icon"
            width={48}
            height={48}
            className={style.ico}
          />
          <h2 className={style.card_title}>Business</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className={style.card}>
          <Image
            src="/images/startup.png"
            alt="Startup Card Icon"
            width={23}
            height={23}
            className={style.ico}
          />
          <h2 className={style.card_title}>Startup</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className={style.card}>
          <Image
            src="/images/economy.png"
            alt="Economy Card Icon"
            width={48}
            height={48}
            className={style.ico}
          />
          <h2 className={style.card_title}>Economy</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className={style.card}>
          <Image
            src="/images/technology.png"
            alt="Technology Card Icon"
            width={48}
            height={48}
            className={style.ico}
          />
          <h2 className={style.card_title}>Technology</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};
