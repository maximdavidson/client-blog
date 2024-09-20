'use client';

import { JoinUs } from '@/components/JoinUs';
import { AboutHeader } from './components/AboutHeader';
import { ListAuthor } from './components/ListAuthors';

const AuthorPage = () => {
  return (
    <>
      <AboutHeader />
      <ListAuthor />
      <JoinUs />
    </>
  );
};

export default AuthorPage;
