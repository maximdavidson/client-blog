'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer';
import Button from '@/UI/Button';
import style from './style.module.scss';

const HomeHero = () => {
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
              By <span className={style.sub_text_span}>James West</span> | May
              23, 2022
            </p>
            <p className={style.text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <Link href="blogPage">
              <Button variant="primary" size="medium" icon={<SlArrowRight />}>
                Read More
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeHero;
