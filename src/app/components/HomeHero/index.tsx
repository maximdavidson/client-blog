import Image from 'next/image';
import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';
import Button from '@/UI/Button';
import style from './style.module.scss';

const HomeHero = () => {
  return (
    <div className={style.container}>
      <Image
        src="/images/homeHero.png"
        alt="Home Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={style.backgroundImage}
      />
      <div className={style.content}>
        <h3 className={style.sub_title}>
          Posted on <span className={style.sub_title_span}>startup</span>
        </h3>
        <h1 className={style.title}>
          Step-by-step guide to choosing great font pairs
        </h1>
        <p className={style.sub_text}>
          By <span className={style.sub_text_span}>James West</span> | May 23,
          2022
        </p>
        <p className={style.text}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <Link href="blogPostPage">
          <Button variant="primary" size="medium" icon={<SlArrowRight />}>
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
