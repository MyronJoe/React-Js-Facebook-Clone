import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
      <Header />


      <div className='app__body'>

          <Sidebar />
          <Feed />

          <Widgets />
      </div>
    </div>
  );
}

export default App;

