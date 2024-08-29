'use client';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '@/UI/Button';
import style from './style.module.scss';

const AboutUs = () => {
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
          <div className={style.stripe}></div>
          <div className={style.wrapper}>
            <div className={style.small_wrap}>
              <div className={style.about_wrap}>
                <h4 className={style.sub_title}>ABOUT US</h4>
                <h1 className={style.about_title}>
                  We are a community of content writers who share their
                  learnings
                </h1>
                <p className={style.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className={style.btn}>
                  <Button variant="secondary" size="without">
                    Read More
                  </Button>
                </div>
              </div>
              <div className={style.mission_wrap}>
                <h4 className={style.sub_title}>OUR MISSION</h4>
                <h1 className={style.mission_title}>
                  Creating valuable content for creatives all around the world
                </h1>
                <p className={style.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutUs;
