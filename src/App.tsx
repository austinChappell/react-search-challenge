import React from 'react';

import ProfilesContextProvider from 'state/ProfilesContextProvider';
import Routes from './Routes';

import './styles.css';

function App() {
  return (
    <ProfilesContextProvider>
      <Routes />
    </ProfilesContextProvider>
  );
}

export default App;
