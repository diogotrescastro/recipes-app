import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import MainProvider from './context/MainProvider';
import LSProvider from './context/LSProvider';

function App() {
  return (
    <HashRouter basename="/">
      <LSProvider>
        <MainProvider>
          <Routes />
        </MainProvider>
      </LSProvider>
    </HashRouter>
  );
}

export default App;
