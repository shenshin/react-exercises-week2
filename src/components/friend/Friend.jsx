import React, { useState, useEffect } from 'react';
import FriendProfile from './FriendProfile';
import Button from './Button';

const Friend = () => {
  // Inside <Friend> create a state variable called
  // friend (with an initial state of {}) and state handler setFriend
  const [friend, setFriend] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // Inside <Friend> (before the return statement) also create a function called getFriend. The purpose of this function is to make an API call to https://www.randomuser.me/api?results=1. You can either use fetch or axios. At the end of the function reassign the friend state variable using setFriend
  const getFriend = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.randomuser.me/api?results=1');
      if (response.status === 404) throw new Error(response.statusText);
      const { results } = await response.json();
      const [
        {
          email,
          name: { first: firstName, last: lastName },
          phone: phoneNum,
          location: {
            city,
            country,
            postcode,
            street: { name: streetName, number: houseNum },
          },
        },
      ] = results;
      setFriend({
        firstName,
        lastName,
        address: `${postcode}, ${city}, ${streetName} ${houseNum}`,
        country,
        email,
        phoneNum,
      });
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <>
      {!error && !isLoading && <FriendProfile friend={friend} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Button getFriend={getFriend} />
    </>
  );
};

export default Friend;
