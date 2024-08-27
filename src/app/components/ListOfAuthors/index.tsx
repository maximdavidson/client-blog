import style from './style.module.scss';
import { AuthorCard } from './components/AuthorCard';

export const ListOfAuthors = () => {
  const authors = [
    {
      avatarSrc: '/images/Floyd_Miles.png',
      name: 'Floyd Miles',
      role: 'Content Writer @Company',
      socialLinks: [
        { src: '/images/FaceBook.png', alt: 'FaceBook' },
        { src: '/images/Twitter.png', alt: 'Twitter' },
        { src: '/images/Instagram.png', alt: 'Instagram' },
        { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
      ],
    },
    {
      avatarSrc: '/images/Dianne_Russell.png',
      name: 'Dianne Russell',
      role: 'Content Writer @Company',
      socialLinks: [
        { src: '/images/FaceBook.png', alt: 'FaceBook' },
        { src: '/images/Twitter.png', alt: 'Twitter' },
        { src: '/images/Instagram.png', alt: 'Instagram' },
        { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
      ],
    },
    {
      avatarSrc: '/images/Jenny_Wilson.png',
      name: 'Jenny Wilson',
      role: 'Content Writer @Company',
      socialLinks: [
        { src: '/images/FaceBook.png', alt: 'FaceBook' },
        { src: '/images/Twitter.png', alt: 'Twitter' },
        { src: '/images/Instagram.png', alt: 'Instagram' },
        { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
      ],
    },
    {
      avatarSrc: '/images/Leslie_Alexander.png',
      name: 'Leslie Alexander',
      role: 'Content Writer @Company',
      socialLinks: [
        { src: '/images/FaceBook.png', alt: 'FaceBook' },
        { src: '/images/Twitter.png', alt: 'Twitter' },
        { src: '/images/Instagram.png', alt: 'Instagram' },
        { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
      ],
    },
  ];

  return (
    <div className={style.container}>
      <h1 className={style.title}>List of Authors</h1>
      <div className={style.cards}>
        {authors.map((author) => (
          <AuthorCard
            key={author.name}
            avatarSrc={author.avatarSrc}
            name={author.name}
            role={author.role}
            socialLinks={author.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};
