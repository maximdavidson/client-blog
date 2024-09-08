'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { authors } from '@/data/authors';
import { AuthorCard } from './components/AuthorCard';
import style from './style.module.scss';

const ListOfAuthors = () => {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className={style.container} ref={ref}>
      {isVisible && (
        <>
          <h1 className={style.title}>{t('AuthorsSection.title')}</h1>
          <div className={style.cards}>
            {authors.slice(0, 4).map((author) => (
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
        </>
      )}
    </div>
  );
};

export default ListOfAuthors;
