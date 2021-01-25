/*
    Inside <DogGallery> create a state variable called dogPhotos (initialize with value []) and
    state handler setDogPhotos
    Inside (before the return statement) also create a function called getDogPhoto. The purpose of this function is to make an API call to https://dog.ceo/api/breeds/image/random. You can either use fetch or axios. At the end of the function push the new dog image URL into the dogPhotos array state variable using setDogPhotos
*/
import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [error, setError] = useState(null);

  const getDogPhoto = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setDogPhotos([...dogPhotos, result.message]);
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {/*
        Inside <DogGallery> return all the dogs stored in the dogPhotos array using
        the map() function. Pass down each dogPhoto into an instance of <DogPhoto>.
        However, when there are no dogs in the array yet make sure to display the message
        "Get your first dog by clicking the button!"
      */}
      {!error && dogPhotos.length > 0
        ? dogPhotos.map((url) => <DogPhoto dogPhoto={url} key={url} />)
        : <p>Get your first dog by clicking the button!</p>}
      {/* Pass down the function getDogPhoto to <Button> */}
      <Button getDogPhoto={getDogPhoto} />
    </div>
  );
}

export default DogGallery;
