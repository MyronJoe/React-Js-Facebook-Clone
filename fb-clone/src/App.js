import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />


      <div className='app__body'>

          <Sidebar />
          {/* <h1>Feeds</h1> */}
          {/* <h1>Widget</h1> */}
      </div>
    </div>
  );
}

export default App;

