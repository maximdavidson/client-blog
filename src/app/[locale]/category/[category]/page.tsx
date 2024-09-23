'use client';

import { useState, useEffect } from 'react';
import { categories } from '@/constants/categories';
import { tags } from '@/constants/tags';
import { Post } from '@/data/authors';
import { getPostsByCategoryAndTag } from '@/utils/getPostsByCategoryAndTag';
import { CategoryHeader } from '../components/categoryHeader';
import { CategorySearch } from '../components/CategorySearch';
import { MainOfCategory } from '../components/MainInCategory';
import style from '../page.module.scss';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const fetchPosts = async (category: string, tag?: string): Promise<Post[]> => {
  try {
    const response = await fetch(
      `/api/posts?category=${category}${tag ? `&tag=${tag}` : ''}`,
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Failed to fetch posts from API:', error);
  }

  return getPostsByCategoryAndTag(category, tag);
};

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts(category, selectedTag || undefined);
      setPosts(fetchedPosts);
    };

    loadPosts();
  }, [category, selectedTag]);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleCategorySelect = (selectedCategory: string) => {
    setSelectedTag(null);
  };

  return (
    <>
      <CategoryHeader category={category} />
      <div className={style.flex_container}>
        <MainOfCategory posts={posts} />
        <CategorySearch
          categories={categories}
          tags={tags}
          onCategorySelect={handleCategorySelect}
          onTagSelect={handleTagSelect}
        />
      </div>
    </>
  );
};

export default CategoryPage;
