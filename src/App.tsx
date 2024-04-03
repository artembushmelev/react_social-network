import React from 'react';
import './App.css';
import { AppWrapper } from './components/AppWrapper';
import { Header } from './layout/header/Header';
import { Navigation } from './layout/section/Navigation';
import { Profile } from './layout/section/Profile';

function App() {
  return (
    <AppWrapper>
        <Header/>
        <Navigation/>
        <Profile/>
    </AppWrapper>
  );
}

export default App;
