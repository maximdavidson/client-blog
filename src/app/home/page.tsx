import Link from 'next/link';
import { AboutUs } from './components/AboutUs';
import { FeaturedPosts } from './components/FeaturedPosts';
import { HomeHero } from './components/HomeHero';
import style from './page.module.scss';

const Home = () => {
  return (
    <div className={style.container}>
      <HomeHero />
      <FeaturedPosts />
      <AboutUs />
    </div>
  );
};

export default Home;
