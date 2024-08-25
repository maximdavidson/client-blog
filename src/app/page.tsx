import Link from 'next/link';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from '@/components/Header';
import Home from './home/page';

const Main = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Home />
      </ErrorBoundary>
    </>
  );
};

export default Main;
