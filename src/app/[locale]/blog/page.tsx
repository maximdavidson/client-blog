import { Category } from '@/components/Category';
import { JoinUs } from '@/components/JoinUs';
import { AllPosts } from './components/AllPosts';
import { PostHead } from './components/PostHead';

const BlogPage = () => {
  return (
    <>
      <PostHead />
      <AllPosts />
      <Category />
      <JoinUs />
    </>
  );
};

export default BlogPage;
