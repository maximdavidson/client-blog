import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { BlogCollection } from './components/BlogPostPageCollection';
import { BlogPostPageMainSection } from './components/BlogPostPageMainSection';
import JoinUs from '../components/JoinUs';

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
