import React from 'react';

function DogPhoto({ dogPhoto }) {
  return (
    <div>
      <img style={{ width: '100%' }} src={dogPhoto} alt="Random Dog" />
    </div>
  );
}

export default DogPhoto;
