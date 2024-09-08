import Link from 'next/link';
import { authors } from '@/data/authors';
import { AuthorCard } from './components/AuthorCard';
import style from './style.module.scss';

export const ListAuthor = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>List of Authors </h1>
      <div className={style.cards}>
        {authors.map((author) => (
          <Link href={`/authorPage/${author.id}`} key={author.id}>
            <AuthorCard
              avatarSrc={author.avatarSrc}
              name={author.name}
              role={author.role}
              socialLinks={author.socialLinks}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
