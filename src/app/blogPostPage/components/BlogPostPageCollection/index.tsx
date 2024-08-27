import Image from 'next/image';
import style from './style.module.scss';

export const BlogCollection = () => {
  return (
    <div className={style.collection}>
      <h2 className={style.collection_title}>What to read next</h2>
      <div className={style.collection_grid}>
        <div className={style.collection_item}>
          <Image
            src="/images/collection_image_1.png"
            alt="Post Image 1"
            width={405}
            height={318}
            className={style.collection_image}
          />
          <div className={style.collection_content}>
            <p className={style.collection_meta}>
              By
              <span className={style.collection_author}>John Doe</span>| Aug 23,
              2021
            </p>
            <h3 className={style.collection_title}>
              A UX Case Study Creating a Studious Environment for Students:
            </h3>
            <p className={style.collection_description}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>

        <div className={style.collection_item}>
          <Image
            src="/images/collection_image_2.png"
            alt="Post Image 2"
            width={405}
            height={318}
            className={style.collection_image}
          />
          <div className={style.collection_content}>
            <p className={style.collection_meta}>
              By{' '}
              <a href="#" className={style.collection_author}>
                John Doe
              </a>{' '}
              | Aug 23, 2021
            </p>
            <h3 className={style.collection_title}>
              A UX Case Study Creating a Studious Environment for Students:
            </h3>
            <p className={style.collection_description}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>

        <div className={style.collection_item}>
          <Image
            src="/images/collection_image_3.png"
            alt="Post Image 3"
            width={405}
            height={318}
            className={style.collection_image}
          />
          <div className={style.collection_content}>
            <p className={style.collection_meta}>
              By{' '}
              <a href="#" className={style.collection_author}>
                John Doe
              </a>{' '}
              | Aug 23, 2021
            </p>
            <h3 className={style.collection_title}>
              A UX Case Study Creating a Studious Environment for Students:
            </h3>
            <p className={style.collection_description}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
      <div className={style.line}></div>
    </div>
  );
};
