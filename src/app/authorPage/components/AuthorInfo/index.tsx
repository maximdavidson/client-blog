import Image from 'next/image';
import style from './style.module.scss';

interface SocialLink {
  src: string;
  alt: string;
}

interface Author {
  avatarSrc: string;
  name: string;
  role: string;
  socialLinks: SocialLink[];
}

interface AuthorInfoProps {
  author: Author;
}

export const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {
  return (
    <div className={style.container}>
      <div className={style.image_wrap}>
        <Image
          src={author.avatarSrc}
          alt={`${author.name} Avatar`}
          width={251}
          height={294}
        />
      </div>
      <div className={style.text_wrap}>
        <h1 className={style.title}>
          Hey there, I’m {author.name} and welcome to my Blog
        </h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
        <div className={style.social}>
          {author.socialLinks.map((link) => (
            <Image
              key={link.alt}
              src={link.src}
              alt={link.alt}
              width={16}
              height={16}
            />
          ))}
        </div>
      </div>
      <div className={style.stripe}></div>
    </div>
  );
};
