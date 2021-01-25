import React, { useState, useEffect } from 'react';
import Joke from './Joke';

function RandomJoke() {
  /*
  Inside <RandomJoke> create a state variable called
  joke (with initial state {}) and state handler setJoke
  */
  const [joke, setJoke] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) throw new Error(response.statusText);
      const randomJoke = await response.json();
      setJoke(randomJoke);
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };
  /*
  Make use of the useEffect hook to make an asynchronous API
  call to the API endpoint. Put the end result into the state variable using setJoke
  */
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {/* Now pass the reassigned state variable joke to the <Joke> component */}
      {!error && Object.keys(joke).length > 0 && !loading && <Joke joke={joke} />}
      {error && <p>{error}</p>}
    </>
  );
}

export default RandomJoke;
