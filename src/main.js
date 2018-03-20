import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('react-container'));
//thats why we need react-preset in babel to convert this (JSX to regular javascript) then that browser can interprit