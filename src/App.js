import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Routes from './routes';

import './index.css';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Routes/>
    </div>
  );
}

export default App;
