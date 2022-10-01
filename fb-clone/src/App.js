import React, {useState} from 'react';
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

  // defined the click funtion passed as a props to header & sidebar
  const [click, setClick] = useState(false)
  

  return (
    <div className="app">
      {!user ? 
        <Login />
      : (
        <>
          <Header setClick={setClick} click={click}/>
          <div className='app__body'>
              <Sidebar click={click}/>
              <Feed />
              <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

