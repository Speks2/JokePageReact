import styles from './Joke.module.scss'; //Importerer SCSS

//vores component med arrow function
const Joke = ({ joke }) => {
  return ( //giver en class navn
    <div className={styles.joke}> 
      <h2>{joke.setup}</h2>
      <p>{joke.punchline}</p> 
    </div>
    //viser vores ting I et p og h2 tags
  );
};

export default Joke; //Exporterer til default
