'use client';
import { useParams } from 'next/navigation';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { authors } from '@/data/authors';
import { AuthorInfo } from '../components/AuthorInfo';
import { AuthorPosts } from '../components/AuthorPosts';

const AuthorPage = () => {
  const params = useParams();
  const id = params.id;

  const author = authors.find((author) => author.id === id);

  if (!author) {
    return <p>Author not found</p>;
  }

  return (
    <>
      <ErrorBoundary>
        <Header />
        <AuthorInfo author={author} />
        <AuthorPosts posts={author.posts} />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default AuthorPage;
