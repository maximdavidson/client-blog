'use client';
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
    </div>
  );
};
