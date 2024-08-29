'use client';
import { useParams } from 'next/navigation';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { authors } from '@/data/authors';
import JoinUs from '../../components/JoinUs';
import { BlogCollection } from '../components/BlogPostPageCollection';
import { BlogPostPageMainSection } from '../components/BlogPostPageMainSection';

const findPostById = (id: string) => {
  for (const author of authors) {
    const post = author.posts.find((p) => p.id === Number(id));
    if (post) {
      return { post, author };
    }
  }
  return null;
};

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const result = findPostById(id);

  if (!result) {
    return <div>Post not found</div>;
  }

  const { post, author } = result;

  return (
    <>
      <ErrorBoundary>
        <Header />
        <BlogPostPageMainSection post={post} author={author} />
        <BlogCollection />
        <JoinUs />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default BlogPostPage;
