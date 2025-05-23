import React from 'react';
import styles from '../assets/style/Title.module.css';

const Title = ({ text }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>{text}</h1>
    <div className={styles.underline}></div>
  </div>
);

export default Title;
