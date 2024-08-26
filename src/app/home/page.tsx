import Link from 'next/link';
import { AboutUs } from './components/AboutUs';
import { FeaturedPosts } from './components/FeaturedPosts';
import { HomeHero } from './components/HomeHero';
import style from './page.module.scss';
import { Category } from './components/Category';
import { SpecialPost } from './components/SpecialPost';
import { ListOfAuthors } from './components/ListOfAuthors';
import { FuturedIn } from './components/FuturedIn';
import { Testimonial } from './components/Testimonials';
import { JoinUs } from './components/JoinUs';

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
      <Testimonial />
      <JoinUs />
    </div>
  );
};

export default Home;
