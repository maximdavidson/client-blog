'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Button from '@/UI/Button';
import style from './style.module.scss';

interface Category {
  title: string;
  iconSrc: string;
}

interface CategorySearchProps {
  categories: Category[];
  tags: string[];
  onCategorySelect: (category: string) => void;
  onTagSelect: (tag: string) => void;
}

export const CategorySearch = ({
  categories,
  tags,
  onCategorySelect,
  onTagSelect,
}: CategorySearchProps) => {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [searchError, setSearchError] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    const allItems = [...categories.map((category) => category.title), ...tags];
    if (searchTerm) {
      const resultSet = new Set(
        allItems.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
      const result = Array.from(resultSet);
      setFilteredResults(result);
      setSearchError(result.length === 0 ? 'No matching results found.' : '');
    } else {
      setFilteredResults([]);
      setSearchError('');
    }
  }, [searchTerm, categories, tags]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const category = categories.find(
        (category) => category.title.toLowerCase() === lowerSearchTerm,
      );
      const tag = tags.find((tag) => tag.toLowerCase() === lowerSearchTerm);

      if (category) {
        onCategorySelect(category.title);
      } else if (tag) {
        onTagSelect(tag);
        setActiveTag(tag);
      } else {
        setSearchError('No matching results found.');
      }

      setSearchTerm('');
    }
  };

  const handleResultClick = (result: string) => {
    setSearchTerm(result);
  };

  const handleResultClickWrapper = (result: string) => () => {
    handleResultClick(result);
  };

  const handleTagClick = (tag: string) => {
    onTagSelect(tag);
    setActiveTag(tag);
  };

  const handleTagClickWrapper = (tag: string) => () => {
    handleTagClick(tag);
  };

  const handleCategorySelect = (title: string) => () => {
    onCategorySelect(title);
  };

  return (
    <div className={style.container}>
      <div className={style.search_container}>
        <input
          type="text"
          placeholder={t('Category.Input.placeholder')}
          className={style.searchInput}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button
          variant="primary"
          size="mediumSearch"
          icon={null}
          onClick={handleSearchClick}
        >
          {t('Category.Input.btn_title')}
        </Button>
      </div>
      {searchError && <p className={style.searchError}>{searchError}</p>}
      {filteredResults.length > 0 && (
        <div className={style.filtered_container}>
          {filteredResults.map((result) => (
            <div
              key={result}
              className={style.filtered_item}
              onClick={handleResultClickWrapper(result)}
            >
              {result}
            </div>
          ))}
        </div>
      )}
      <div className={style.item_container}>
        <h1 className={style.item_container_title}>
          {t('Category.categoriesTitle')}
        </h1>
        {categories.map((category) => (
          <Link
            key={category.title}
            href={`/categoryPage/${category.title}`}
            onClick={handleCategorySelect(category.title)}
            className={style.search_item}
          >
            <Image
              src={category.iconSrc}
              alt={`${category.title} Image`}
              width={48}
              height={48}
              className={style.ico}
            />
            <h2 className={style.item_title}>{category.title}</h2>
          </Link>
        ))}
      </div>
      <div className={style.tags}>
        <h1 className={style.tags_item}>{t('Category.tagsTitle')}</h1>
        <div className={style.tags_list}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={`${style.tag} ${activeTag === tag ? style.activeTag : ''}`}
              onClick={handleTagClickWrapper(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {filteredResults.length === 1 &&
        categories.some(
          (category) => category.title === filteredResults[0],
        ) && (
          <Link
            href={`/categoryPage/${filteredResults[0]}`}
            className={style.searchResultLink}
          >
            {t('Category.Input.result', { result: filteredResults[0] })}
          </Link>
        )}
    </div>
  );
};
