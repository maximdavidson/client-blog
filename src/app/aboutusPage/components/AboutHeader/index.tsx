import Image from 'next/image';
import style from './style.module.scss';

export const AboutHeader = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.about_head}>
          <div className={style.head_card}>
            <h4 className={style.sub_title}>ABOUT US</h4>
            <h1 className={style.card_title}>
              We are a team of content writers who share their learnings
            </h1>
          </div>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={style.poster_wrap}>
          <div className={style.poster}>
            <Image
              src="/images/aboutUsBack.png"
              alt="About Us Background"
              width={1360}
              height={444}
            />
          </div>
          <div className={style.info_in_poster_wrap}>
            <div className={style.text_in_poster}>
              <div className={style.stat}>
                <h3 className={style.statNumber}>12+</h3>
                <p className={style.statLabel}>Blogs Published</p>
              </div>
              <div className={style.stat}>
                <h3 className={style.statNumber}>18K+</h3>
                <p className={style.statLabel}>Views on Finsweet</p>
              </div>
              <div className={style.stat}>
                <h3 className={style.statNumber}>30K+</h3>
                <p className={style.statLabel}>Total active Users</p>
              </div>
            </div>
            <div className={style.stripe}></div>
          </div>
        </div>
      </div>

      <div className={style.text_under_poster}>
        <div className={style.left_side}>
          <h4 className={style.sub_title}>OUR MISSION</h4>
          <h1 className={style.text_under_post_title}>
            Creating valuable content for creatives all around the world
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className={style.right_side}>
          <h4 className={style.sub_title}>OUR VISION</h4>
          <h1 className={style.text_under_post_title}>
            A platform that empowers individuals to improve
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
    </div>
  );
};
