import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

let params = new URLSearchParams(window.location.search);
let id = params.get('id');
if (id === null) {
  id = 1;
}

// pass parsed URL id into app
ReactDOM.render(<App id={id}/>, document.getElementById('description'));