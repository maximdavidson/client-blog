import Image from 'next/image';
import Button from '@/UI/Button';
import style from './style.module.scss';

const JoinUs = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Join our team to be a part of our story</h1>
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Button variant="primary" size="medium" icon={null}>
        Join Now
      </Button>
    </div>
  );
};

export default JoinUs;
