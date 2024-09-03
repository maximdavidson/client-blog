'use client';

import { useState, useEffect } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { categories } from '@/constants/categories';
import { tags } from '@/constants/tags';
import { Post, authors } from '@/data/authors';
import { CategoryHeader } from '../components/CategoryHeader';
import { CategorySearch } from '../components/CategorySearch';
import { MainOfCategory } from '../components/MainInCategory';
import style from '../page.module.scss';

const getPostsByCategory = (category: string): Post[] => {
  return authors
    .flatMap((author) => author.posts)
    .filter((post) => post.category.toLowerCase() === category.toLowerCase());
};

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchedPosts = getPostsByCategory(category);
    setPosts(fetchedPosts.length > 0 ? fetchedPosts : []);
  }, [category]);

  return (
    <>
      <ErrorBoundary>
        <Header />
        <CategoryHeader category={category} />
        <div className={style.flex_container}>
          <MainOfCategory posts={posts} />
          <CategorySearch
            categories={categories}
            tags={tags}
            onTagSelect={(tag) => setPosts(getPostsByCategory(tag))}
          />
        </div>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default CategoryPage;
