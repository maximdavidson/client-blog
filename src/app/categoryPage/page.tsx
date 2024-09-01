import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CategoryHeader } from './components/categoryHeader';
import { CategorySearch } from './components/CategorySearch';
import { MainOfCategory } from './components/MainInCategory';
import style from './page.module.scss';
const CategoryPage = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <CategoryHeader />
        <div className={style.flex_container}>
          <MainOfCategory />
          <CategorySearch />
        </div>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default CategoryPage;
