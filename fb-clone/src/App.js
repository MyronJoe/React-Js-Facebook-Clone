import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useStateValue } from '../src/components/StateProvider';
// import { actionType } from '../Reducer.js';

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? 
        <Login />
      : (
        <>
          <Header />
          <div className='app__body'>
              <Sidebar />
              <Feed />
              <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

