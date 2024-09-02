import React, { useState, useEffect } from 'react'; // importerer use states
import Joke from './components/Joke/Joke';
import styles from './components/Joke/Joke.module.scss'; //Importerer vores SCSS og main JSX

//Vi gøre vores ting klar med at lave nogle custom useStates 
const App = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  // Her vi henter en joke en gange
  useEffect(() => {
    fetchJoke();
  }, []);

 //Henter API med fetch og fanger errors.
  const fetchJoke = async () => {
    setLoading(true); //viser at den virker. (Loader)
    setError(null); //Viser I console at der er ingen errors med API 
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random'); //link til vores API
      const data = await response.json(); //Henter Data I JSON form
      setJoke(data);
    } catch (error) {
      setError('Couldnt get the joke, try again later.'); //Error handling (fanger errors)
    } finally {
      setLoading(false); //viser en loading screen og ikke viser
    }
    console.log(joke, loading, error,); //Logger ting I konsol som jeg vil
  };
 
   
  const toggleTheme = () => {
    setDarkMode(!darkMode); //Dette styk af kode activerer darkMode/ det gøre så vi kan skifte tema til dark mode, med ! kigger det først til <button onClick={toggleTheme}>
    // Change to {darkMode ? 'Light' : 'Dark'} Theme. Uden det anded kode virker ikke det her basically idk. 
  };

  return (
    //HTML med button med darkMode button, title, errors og en loading screen. Navner vores skift tema knap.
    <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.container}>
        <h1>Joke App</h1> 
        <button onClick={toggleTheme}>
          Change to {darkMode ? 'Light' : 'Dark'} Theme
        </button>
        {loading ? (
          <p>Getting the joke...</p> //Ternary operator med ?. Hvis der error bliver det vist I p tag. (Conditional rendering). Hjælper med at bestemme hvilke state man skal render first.
        ) : error ? (
          <p>{error}</p>
        ) : (
          joke && <Joke joke={joke} /> //Hvis joke er true so bliver det rendered, hvis false, så nej.
        )}
        <button onClick={fetchJoke}>New joke</button>
      </div>
    </div>
  );
};

export default App;
