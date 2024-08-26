import Link from 'next/link';
import { AboutUs } from './components/AboutUs';
import { FeaturedPosts } from './components/FeaturedPosts';
import { HomeHero } from './components/HomeHero';
import style from './page.module.scss';
import { Category } from './components/Category';
import { SpecialPost } from './components/SpecialPost';
import { ListOfAuthors } from './components/ListOfAuthors';
import { FuturedIn } from './components/FuturedIn';

const Home = () => {
  return (
    <div className={style.container}>
      <HomeHero />
      <FeaturedPosts />
      <AboutUs />
      <Category />
      <SpecialPost />
      <ListOfAuthors />
      <FuturedIn />
    </div>
  );
};

export default Home;
