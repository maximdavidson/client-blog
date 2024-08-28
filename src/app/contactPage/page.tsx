import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ContactCard } from './components/ContactCard';
import { ContactForm } from './components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <ContactForm />
        <ContactCard />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default ContactPage;
