import React from 'react';
import './App.css';
import { AppWrapper } from './layout/AppWrapper';
import { Header } from './components/section/header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { AppWrapperContent } from './layout/AppWrapperContent';

function App() {
  return (
    <AppWrapper>
        <Header/>
        <Navigation/>
        <AppWrapperContent>
          {/* <Profile/> */}
          <Dialogs/>
        </AppWrapperContent>
    </AppWrapper>
  );
}

export default App;
