'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { authors } from '@/data/authors';
import style from './style.module.scss';

const allPosts = authors.flatMap((author) => author.posts);

export const MainOfCategory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 5;
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className={style.container}>
      {currentPosts.map((post) => (
        <Link href={`/blogPostPage/${post.id}`} key={post.id}>
          <div className={style.post_card}>
            <div className={style.image_wrap}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={294}
                height={312}
                className={style.image}
              />
            </div>
            <div className={style.text_wrap}>
              <h4 className={style.sub_title}>{post.subtitle}</h4>
              <h1 className={style.card_title}>{post.title}</h1>
              <p className={style.text}>{post.content}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
