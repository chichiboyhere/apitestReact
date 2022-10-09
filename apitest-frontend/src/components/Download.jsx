import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download Interact with Maths</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get the PDF here. It's absolutely free.</p>
        </div>
        <button className={styles.btnPrimary}>Interact with Math</button>
        <div className={styles.flexCenter}>
          <img 
            src={assets.students}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download