import Image from 'next/image';
import style from './style.module.scss';

export const AuthorPosts = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>My Posts</h1>
      <div className={style.post_card}>
        <div className={style.image_wrap}>
          <Image
            src="/images/authorPost1.png"
            alt="Author Post "
            width={412}
            height={320}
          />
        </div>
        <div className={style.text_wrap}>
          <h4 className={style.sub_title}>BUSINESS</h4>
          <h1 className={style.card_title}>
            Font sizes in UI design: The complete guide to follow
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={style.post_card}>
        <div className={style.image_wrap}>
          <Image
            src="/images/authorPost2.png"
            alt="Author Post "
            width={412}
            height={320}
          />
        </div>
        <div className={style.text_wrap}>
          <h4 className={style.sub_title}>ECONOMY</h4>
          <h1 className={style.card_title}>
            How to build rapport with your web design clients
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
