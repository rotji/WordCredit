import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>WordCredit</h1>
      <nav>
        <a href="/">Public Analytics</a>
        <a href="/tracker">Private Tracker</a>
      </nav>
    </header>
  );
};

export default Header;
