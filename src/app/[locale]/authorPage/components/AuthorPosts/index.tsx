'use client';

import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.scss';

interface Post {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface AuthorPostsProps {
  posts: Post[];
}

export const AuthorPosts: React.FC<AuthorPostsProps> = ({ posts }) => {
  if (posts.length === 0) {
    return <p className={style.no_result}>No posts available.</p>;
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>My Posts</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/blogPostPage/${post.id}`}>
          <div className={style.post_card} key={post.id}>
            <div className={style.image_wrap}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={412}
                height={320}
              />
            </div>
            <div className={style.text_wrap}>
              <h4 className={style.sub_title}>{post.category}</h4>
              <h1 className={style.card_title}>{post.title}</h1>
              <p className={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
