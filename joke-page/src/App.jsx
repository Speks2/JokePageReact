import React, { useState, useEffect } from 'react';
import Joke from './components/Joke/Joke';
import styles from './components/Joke/Joke.module.scss'; 

const App = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      setError('Couldnt get the joke, try again later.');
    } finally {
      setLoading(false);
    }
    console.log(joke, loading, error, darkMode);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.container}>
        <h1>Joke App</h1>
        <button onClick={toggleTheme}>
          Change to {darkMode ? 'Light' : 'Dark'} Theme
        </button>
        {loading ? (
          <p>Getting the joke...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          joke && <Joke joke={joke} />
        )}
        <button onClick={fetchJoke}>New joke</button>
      </div>
    </div>
  );
};

export default App;
