import style from './style.module.scss';
import Image from 'next/image';

const FuturedIn = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.text_wrap}>
          <p className={style.sub_text}>We are</p>
          <p className={style.text}>Featured in</p>
        </div>
        <Image
          src="/images/Logo1.png"
          alt="Compony Logo"
          width={160}
          height={32}
        />
        <Image
          src="/images/Logo2.png"
          alt="Compony Logo"
          width={160}
          height={32}
        />
        <Image
          src="/images/Logo3.png"
          alt="Compony Logo"
          width={160}
          height={32}
        />
        <Image
          src="/images/Logo4.png"
          alt="Compony Logo"
          width={160}
          height={32}
        />
        <Image
          src="/images/Logo5.png"
          alt="Compony Logo"
          width={160}
          height={32}
        />
      </div>
    </div>
  );
};

export default FuturedIn;
