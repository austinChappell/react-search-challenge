import React from 'react';

import ProfilesContextProvider from './components/ProfilesContextProvider';
import Routes from './components/Routes';

import './styles.css';

function App() {
  return (
    <ProfilesContextProvider>
      <Routes />
    </ProfilesContextProvider>
  );
}

export default App;
