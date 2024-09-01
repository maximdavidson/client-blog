'use client';
import Image from 'next/image';
import style from './style.module.scss';

export const CategorySearch = () => {
  return (
    <div className={style.container}>
      <div className={style.search_container}>
        <input
          type="text"
          placeholder="Search for tag..."
          className={style.searchInput}
        />
        <button className={style.searchButton}>Search</button>
      </div>
      <div className={style.item_container}>
        <h1 className={style.item_container_title}>Categories</h1>
        <div className={style.search_item}>
          <Image
            src="/images/shuttle.png"
            alt="Shuttle Image"
            width={48}
            height={48}
            className={style.ico}
          />
          <h2 className={style.item_title}>Startup</h2>
        </div>
        <div className={style.search_item}>
          <Image
            src="/images/business.png"
            alt="Business Image"
            width={48}
            height={48}
            className={style.ico}
          />
          <h2 className={style.item_title}>Startup</h2>
        </div>
        <div className={style.search_item}>
          <Image
            src="/images/economy.png"
            alt="Economy Image"
            width={48}
            height={48}
            className={style.ico}
          />
          <h2 className={style.item_title}>Startup</h2>
        </div>
        <div className={style.search_item}>
          <Image
            src="/images/technology.png"
            alt="Technology Image"
            width={48}
            height={48}
            className={style.ico}
          />
          <h2 className={style.item_title}>Startup</h2>
        </div>
      </div>
      <div className={style.tags}>
        <h1 className={style.tags_item}>All Tags</h1>
        <div className={style.tags_list}>
          <span className={style.tag}>Business</span>
          <span className={style.tag}>Experience</span>
          <span className={style.tag}>Screen</span>
          <span className={style.tag}>Technology</span>
          <span className={style.tag}>Marketing</span>
          <span className={style.tag}>Life</span>
        </div>
      </div>
    </div>
  );
};
