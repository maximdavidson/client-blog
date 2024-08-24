import Link from 'next/link';
import style from './page.module.scss';

const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>About Page</h1>
      <p>This is the About Page.</p>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

export default About;
