import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from './components/ContactForm';
import { ContactCard } from './components/ContactCard';

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
