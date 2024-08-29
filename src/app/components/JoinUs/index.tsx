'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Button from '@/UI/Button';
import style from './style.module.scss';

const JoinUs = () => {
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
          <h1 className={style.title}>
            Join our team to be a part of our story
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Link href="contactPage">
            <Button variant="primary" size="medium" icon={null}>
              Join Now
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default JoinUs;
