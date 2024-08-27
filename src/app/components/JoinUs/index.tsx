import Button from '@/UI/Button';
import Link from 'next/link';
import style from './style.module.scss';

const JoinUs = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Join our team to be a part of our story</h1>
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Link href="contactPage">
        <Button variant="primary" size="medium" icon={null}>
          Join Now
        </Button>
      </Link>
    </div>
  );
};

export default JoinUs;
