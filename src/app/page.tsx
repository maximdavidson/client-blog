import Link from 'next/link';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from '@/components/Header';
import Home from './home/page';
import { Footer } from '@/components/Footer';

const Main = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Home />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default Main;
