import './App.css';
import Friend from './components/friend/Friend';
import DogGalery from './components/dog/DogGallery';
import RandomJoke from './components/joke/RandomJoke';

function App() {
  return (
    <>
      <h3>Exercise 1. New friend on demand</h3>
      {/*
        In this exercise we'll be using the following API endpoint: https://www.randomuser.me/api?results=1
        Create 3 functional components called <Friend>, <FriendProfile> and <Button>
        Test if everything works by importing it into the top level component, which is <App>
      */}
      <Friend />
      {/*
        Let's make a randomized dog photo gallery!
        In this exercise we'll be using the following API endpoint: https://dog.ceo/api/breeds/image/random
        Create 3 functional components: <DogGallery>, <DogPhoto> and <Button>
        Test your components by importing it into the top level component, which is <App>
      */}
      <h3>Exercise 2. Dog photo gallery</h3>
      <DogGalery />
      <h3>Exercise 3. Random joke generator</h3>
      {/*
        In this exercise we'll be using the following API endpoint: https://official-joke-api.appspot.com/random_joke
        Create 2 functional components: <RandomJoke> and <Joke>
      */}
      <RandomJoke />
    </>
  );
}

export default App;
