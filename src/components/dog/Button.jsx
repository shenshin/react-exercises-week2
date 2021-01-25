/*
Inside the <Button> component, create a <button> that
has the text "Get a dog!" and onClick attribute
*/
import React from 'react';

function Button({ getDogPhoto }) {
  return (
    <button type="button" onClick={getDogPhoto}>
      Get a dog!
    </button>
  );
}

export default Button;
