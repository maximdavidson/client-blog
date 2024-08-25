import Link from 'next/link';
import style from './style.module.scss';

export const Header = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Modsen Client Blog</h1>
      <div className={style.navigate_wrap}>
        <nav className={style.navigation}>
          <Link href="home">Home</Link>
          <Link href="blog">Blog</Link>
          <Link href="about">About Us</Link>
          <Link href="contact">Contact Us</Link>
        </nav>
        <button className={style.video_btn}>Video about us</button>
      </div>
    </div>
  );
};
