import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PolicyInfo } from './components/PolyceInfo';

const privatePolicyPage = () => {
  return (
    <>
      <ErrorBoundary>
        <PolicyInfo />
      </ErrorBoundary>
    </>
  );
};

export default privatePolicyPage;
