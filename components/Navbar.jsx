import Image from 'next/image';
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}></div>
      <div className={styles.callButton}>
        <Image
          src="/img/telephone.png"
          alt="telephone"
          width="32"
          height="32"
        />
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW</div>
        <div className={styles.text}>+880 1722154419</div>
      </div>
      <div className={styles.item}>a</div>
      <div className={styles.item}>a</div>
    </div>
  );
};

export default Navbar;
