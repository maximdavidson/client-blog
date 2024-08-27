import style from './style.module.scss';
import Button from '@/UI/Button';
import { SlArrowRight } from 'react-icons/sl';
import Image from 'next/image';

export const SpecialPost = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.image_wrap}>
          <Image
            src="/images/specialPost.png"
            alt="Image Spacial Post Side"
            width={979}
            height={705}
          />
        </div>
        <div className={style.content}>
          <h3 className={style.sub_title}>Why we started </h3>
          <h1 className={style.title}>
            It started out as a simple idea and evolved into our passion
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <Button variant="primary" size="medium" icon={<SlArrowRight />}>
            Discover our story
          </Button>
        </div>
      </div>
    </div>
  );
};
