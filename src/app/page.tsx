import dynamic from 'next/dynamic';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const HomeHero = dynamic(() => import('./components/HomeHero'), {
  ssr: false,
});
const FeaturedPosts = dynamic(() => import('./components/FeaturedPosts'), {
  ssr: false,
});
const AboutUs = dynamic(() => import('./components/AboutUs'), {
  ssr: false,
});
const Category = dynamic(() => import('./components/Category'), {
  ssr: false,
});
const SpecialPost = dynamic(() => import('./components/SpecialPost'), {
  ssr: false,
});
const ListOfAuthors = dynamic(() => import('./components/ListOfAuthors'), {
  ssr: false,
});
const FuturedIn = dynamic(() => import('./components/FuturedIn'), {
  ssr: false,
});
const Testimonial = dynamic(() => import('./components/Testimonials'), {
  ssr: false,
});
const JoinUs = dynamic(() => import('./components/JoinUs'), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <HomeHero />
        <FeaturedPosts />
        <AboutUs />
        <Category />
        <SpecialPost />
        <ListOfAuthors />
        <FuturedIn />
        <Testimonial />
        <JoinUs />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default Home;
