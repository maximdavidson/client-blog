import Category from '@/app/components/Category';
import JoinUs from '@/app/components/JoinUs';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AllPosts } from './components/AllPosts';
import { PostHead } from './components/PostHead';

const BlogPage = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <PostHead />
        <AllPosts />
        <Category />
        <JoinUs />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default BlogPage;
