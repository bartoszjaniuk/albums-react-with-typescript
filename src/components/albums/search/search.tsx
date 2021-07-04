import React, { useEffect, useRef } from 'react';
import styles from './search.module.scss';

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className={styles.card}>
      <input
        type="text"
        placeholder="search by title.."
        className={styles.input}
        ref={inputRef}
      />
    </div>
  );
};

export default Search;
