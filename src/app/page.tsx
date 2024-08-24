import Link from 'next/link';
import style from './page.module.scss';

const Home = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Link href="about">Go to About Page</Link>
    </div>
  );
};

export default Home;
