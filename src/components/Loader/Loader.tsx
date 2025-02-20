import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'light';
}

export const Loader: React.FC<LoaderProps> = ({ 
  size = 'medium',
  variant = 'primary'
}) => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={`${styles.loader} ${styles[size]} ${styles[variant]}`}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}; 