'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SlArrowRight } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer';
import Button from '@/UI/Button';
import style from './style.module.scss';

const SpecialPost = () => {
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
        <div className={style.wrapper}>
          <div className={style.image_wrap}>
            <Image
              src="/images/specialPost.png"
              alt="Image Special Post Side"
              width={979}
              height={705}
            />
          </div>
          <div className={style.content}>
            <h3 className={style.sub_title}>Why we started</h3>
            <h1 className={style.title}>
              It started out as a simple idea and evolved into our passion
            </h1>
            <p className={style.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <Button variant="primary" size="medium" icon={<SlArrowRight />}>
              Discover our story
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialPost;
