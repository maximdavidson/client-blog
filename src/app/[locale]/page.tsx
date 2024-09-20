import { AboutUs } from '@/components/AboutUs';
import { Category } from '@/components/Category';
import { FeaturedPosts } from '@/components/FeaturedPosts';
import { FuturedIn } from '@/components/FuturedIn';
import { HomeHero } from '@/components/HomeHero';
import { JoinUs } from '@/components/JoinUs';
import { ListOfAuthors } from '@/components/ListOfAuthors';
import { SpecialPost } from '@/components/SpecialPost';
import { Testimonial } from '@/components/Testimonials';

const Home = () => {
  return (
    <>
      <HomeHero />
      <FeaturedPosts />
      <AboutUs />
      <Category />
      <SpecialPost />
      <ListOfAuthors />
      <FuturedIn />
      <Testimonial />
      <JoinUs />
    </>
  );
};

export default Home;
