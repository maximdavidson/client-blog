import Image from 'next/image';
import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';
import Button from '@/UI/Button'; // Импортируем кастомный компонент Button
import style from './style.module.scss';

export const FeaturedPosts = () => {
  return (
    <div className={style.container}>
      <div className={style.feature_wrap}>
        <h1 className={style.title}>Featured Post</h1>
        <div className={style.post_wrap}>
          <Image
            src="/images/featuredPosts.png"
            alt="Featured Post Image"
            width={669}
            height={352}
            className={style.backgroundImage}
          />
          <p className={style.sub_text}>
            By <span className={style.sub_text_span}>James Doe</span> | May 23,
            2022
          </p>
          <h1 className={style.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h1>
          <p className={style.text}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Button variant="primary" size="medium" icon={<SlArrowRight />}>
            Read More
          </Button>
        </div>
      </div>

      <div className={style.all_wrap}>
        <div className={style.title_wrap}>
          <h1 className={style.title}>All Post</h1>
          <a className={style.link} href="#!">
            View All
          </a>
        </div>
        <div className={style.post_item}>
          <p className={style.item_text}>
            By <span className={style.item_text}>James Doe</span> | May 23, 2022
          </p>
          <h1 className={style.item_title}>
            8 Figma design systems that you can download for free today.
          </h1>
        </div>
        <div className={style.post_item}>
          <p className={style.item_text}>
            By <span className={style.item_text}>James Doe</span> | May 23, 2022
          </p>
          <h1 className={style.item_title}>
            8 Figma design systems that you can download for free today.
          </h1>
        </div>
        <div className={style.post_item}>
          <p className={style.item_text}>
            By <span className={style.item_text}>James Doe</span> | May 23, 2022
          </p>
          <h1 className={style.item_title}>
            8 Figma design systems that you can download for free today.
          </h1>
        </div>
        <div className={style.post_item}>
          <p className={style.item_text}>
            By <span className={style.item_text}>James Doe</span> | May 23, 2022
          </p>
          <h1 className={style.item_title}>
            8 Figma design systems that you can download for free today.
          </h1>
        </div>
      </div>
    </div>
  );
};
