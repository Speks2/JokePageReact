import React from 'react';
import styles from './Joke.module.scss'; 

const Joke = ({ joke }) => {
  return (
    <div className={styles.joke}>
      <h2>{joke.setup}</h2>
      <p>{joke.punchline}</p>
    </div>
  );
};

export default Joke;
