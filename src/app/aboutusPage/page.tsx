'use client';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AboutHeader } from './components/AboutHeader';
import { ListAuthor } from './components/ListAuthors';
import JoinUs from '../components/JoinUs';

const AuthorPage = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <AboutHeader />
        <ListAuthor />
        <JoinUs />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default AuthorPage;
