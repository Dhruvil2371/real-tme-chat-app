import React from 'react';
import { Route} from 'react-router-dom';
import {Switch} from 'react-router'
import './App.css';
import Home from './Home/Home';
import ChatRoom from './ChatRoom/ChatRoom';

function App() {
  return (
    <div className='App'>
      {/* <h1>Hello</h1> */}
      <Switch>
      <Route path="/" exact>
        <Home  />
        </Route>
        <Route path="/:ChatId" exact>
        <ChatRoom  />
      </Route>
      </Switch>
      </div>
  );
}

export default App;
