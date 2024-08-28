import Image from 'next/image';
import style from './style.module.scss';

export const AuthorInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.image_wrap}>
        <Image
          src="/images/Andrew_Jonhson.png"
          alt="Andrew_Jonhson User Avatar"
          width={251}
          height={294}
        />
      </div>
      <div className={style.text_wrap}>
        <h1 className={style.title}>
          Hey there, I’m Andrew Jonhson and welcome to my Blog
        </h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
        <div className={style.social}>
          <Image
            src="/images/FaceBook.png"
            alt="FaceBook"
            width={16}
            height={16}
          />
          <Image
            src="/images/Twitter.png"
            alt="Twitter"
            width={16}
            height={16}
          />
          <Image
            src="/images/Instagram.png"
            alt="Instagram"
            width={16}
            height={16}
          />
          <Image
            src="/images/LinkedIn.png"
            alt="LinkedIn"
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className={style.stripe}></div>
    </div>
  );
};
