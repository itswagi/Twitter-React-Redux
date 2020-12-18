import React from 'react';

import './App.css';
import {PostsList} from './features/posts/postsList'

function App() {
  return (
    <div className="App">
        <div id="center" className="column">
          <PostsList />
        </div>
        <div id="left" className="column"></div>
        <div id="right" className="column"></div>
    </div>
  );
}

export default App;
