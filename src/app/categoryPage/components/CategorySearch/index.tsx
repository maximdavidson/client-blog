'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/UI/Button';
import style from './style.module.scss';

interface Category {
  title: string;
  iconSrc: string;
}

interface CategorySearchProps {
  categories: Category[];
  tags: string[];
  onTagSelect: (tag: string) => void;
}

export const CategorySearch = ({
  categories,
  tags,
  onTagSelect,
}: CategorySearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [searchError, setSearchError] = useState('');
  const router = useRouter();

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
      if (
        categories.some(
          (category) => category.title.toLowerCase() === lowerSearchTerm,
        ) ||
        tags.some((tag) => tag.toLowerCase() === lowerSearchTerm)
      ) {
        onTagSelect(searchTerm);
        router.push(`/categoryPage/${searchTerm}`);
      } else {
        setSearchError('No matching results found.');
      }
    }
  };

  const handleResultClick = (result: string) => {
    setSearchTerm(result);
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    onTagSelect(tag);
  };

  return (
    <div className={style.container}>
      <div className={style.search_container}>
        <input
          type="text"
          placeholder="Search for tag..."
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
          Search
        </Button>
      </div>
      {searchError && <p className={style.searchError}>{searchError}</p>}
      {filteredResults.length > 0 && (
        <div className={style.filtered_container}>
          {filteredResults.map((result) => (
            <div
              key={result}
              className={style.filtered_item}
              onClick={() => handleResultClick(result)}
            >
              {result}
            </div>
          ))}
        </div>
      )}
      <div className={style.item_container}>
        <h1 className={style.item_container_title}>Categories</h1>
        {categories.map((category) => (
          <div
            key={category.title}
            className={style.search_item}
            onClick={() => handleTagClick(category.title)}
          >
            <Image
              src={category.iconSrc}
              alt={`${category.title} Image`}
              width={48}
              height={48}
              className={style.ico}
            />
            <h2 className={style.item_title}>{category.title}</h2>
          </div>
        ))}
      </div>
      <div className={style.tags}>
        <h1 className={style.tags_item}>All Tags</h1>
        <div className={style.tags_list}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={style.tag}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
