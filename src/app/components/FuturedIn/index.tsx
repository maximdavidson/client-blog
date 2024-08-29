'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import style from './style.module.scss';

const FuturedIn = () => {
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
          <div className={style.text_wrap}>
            <p className={style.sub_text}>We are</p>
            <p className={style.text}>Featured in</p>
          </div>
          <Image
            src="/images/Logo1.png"
            alt="Company Logo"
            width={160}
            height={32}
          />
          <Image
            src="/images/Logo2.png"
            alt="Company Logo"
            width={160}
            height={32}
          />
          <Image
            src="/images/Logo3.png"
            alt="Company Logo"
            width={160}
            height={32}
          />
          <Image
            src="/images/Logo4.png"
            alt="Company Logo"
            width={160}
            height={32}
          />
          <Image
            src="/images/Logo5.png"
            alt="Company Logo"
            width={160}
            height={32}
          />
        </div>
      )}
    </div>
  );
};

export default FuturedIn;
