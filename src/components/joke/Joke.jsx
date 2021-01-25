import React from 'react';

function Joke({ joke: { setup, punchline } }) {
  return (
    /*
    Inside the <Joke> component, display the setup and punchline attributes in 2 <p> tags
    */
    <div>
      <p>{`${setup}... `}</p>
      <p>{punchline}</p>
    </div>
  );
}

export default Joke;
