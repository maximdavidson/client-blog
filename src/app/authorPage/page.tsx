import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AuthorInfo } from './components/AuthorInfo';
import { AuthorPosts } from './components/AuthorPosts';

const AuthorPage = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <AuthorInfo />
        <AuthorPosts />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default AuthorPage;
