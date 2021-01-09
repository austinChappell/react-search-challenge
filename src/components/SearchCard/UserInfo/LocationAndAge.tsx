import React, { FC } from 'react';

interface Props {
  age: Profile['age'];
  location: Profile['location'];
}

const LocationAndAge: FC<Props> = ({ age, location }) => (
  <span>{location ? `${age} • ${location}` : age}</span>
);

export default LocationAndAge;
