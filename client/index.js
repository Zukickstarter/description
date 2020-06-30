import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import NavBar from './components/NavBar.jsx';

let params = new URLSearchParams(window.location.search);
let id = params.get('id');
if (id === null) {
  id = 1;
}

ReactDOM.render(<NavBar />, document.getElementById('navbar-main'));
ReactDOM.render(<App id={id} />, document.getElementById('description-main'));