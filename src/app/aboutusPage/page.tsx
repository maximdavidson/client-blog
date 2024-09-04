'use client';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AboutHeader } from './components/AboutHeader';
import JoinUs from '../components/JoinUs';

const AuthorPage = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <AboutHeader />
        <JoinUs />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default AuthorPage;
