import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import JoinUs from '../components/JoinUs';
import BlogPostPageMainSection from './components/BlogPostPageMainSection';
import { BlogCollection } from './components/BlogPostPageCollection';

const BlogPostPage = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <BlogPostPageMainSection />
        <BlogCollection />
        <JoinUs />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default BlogPostPage;
