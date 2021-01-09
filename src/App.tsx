import BaseLayout from 'components/BaseLayout';
import React from 'react';

import ProfilesContextProvider from './components/ProfilesContextProvider';
import Routes from './components/Routes';

import './styles.css';

function App() {
  return (
    <ProfilesContextProvider>
      <BaseLayout>
        <Routes />
      </BaseLayout>
    </ProfilesContextProvider>
  );
}

export default App;
