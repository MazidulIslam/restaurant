import React, { useState } from 'react';
import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const images = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setSlideNumber(slideNumber !== 0 ? slideNumber - 1 : 2);
    }
    if (direction === 'r') {
      setSlideNumber(slideNumber !== 2 ? slideNumber + 1 : 0);
    }
  };
  console.log(slideNumber);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image
          src="/img/arrowl.png"
          alt=""
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slideNumber}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" fill style={{ objectFit: 'contain' }} />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image
          src="/img/arrowr.png"
          alt=""
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default Featured;
