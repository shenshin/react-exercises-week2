// Inside the <Button> component, create a <button>
// that has the text "Get a friend!" and onClick attribute
// Pass down the function getFriend to <Button>
import React from 'react';

const Button = ({ getFriend }) => (
  <button type="button" onClick={getFriend} style={{ cursor: 'pointer' }}>
    Get a friend!
  </button>
);

export default Button;
