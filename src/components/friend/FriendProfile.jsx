// Inside <FriendProfile> create an <ul> that showcases the following
// attributes of the person: The first and last names, the address and country,
// the email address, and finally also the phone number
// Pass down the friend state variable to the <FriendProfile>
import React from 'react';

const FriendProfile = ({ friend }) => {
  const {
    firstName,
    lastName,
    address,
    country,
    email,
    phoneNum,
  } = friend;
  const style = {
    marginLeft: '1rem',
  };
  return (
    <ul style={{ listStyle: 'none' }}>
      <li>
        First name:
        <span style={style}>{`${firstName},`}</span>
        <span style={style}>Last name:</span>
        <span style={style}>{lastName}</span>
      </li>
      <li>
        {'Address: '}
        <span style={style}>{address}</span>
      </li>
      <li>
        {'Country: '}
        <span style={style}>{country}</span>
      </li>
      <li>
        {'Email: '}
        <span style={style}>{email}</span>
      </li>
      <li>
        {'Phone number: '}
        <span style={style}>{phoneNum}</span>
      </li>
    </ul>
  );
};

export default FriendProfile;
