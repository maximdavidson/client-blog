import Link from 'next/link';
import { AboutUs } from './components/AboutUs';
import { FeaturedPosts } from './components/FeaturedPosts';
import { HomeHero } from './components/HomeHero';
import style from './page.module.scss';
import { Category } from './components/Category';

const Home = () => {
  return (
    <div className={style.container}>
      <HomeHero />
      <FeaturedPosts />
      <AboutUs />
      <Category />
    </div>
  );
};

export default Home;
