import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Game from './components/Game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Game />,
  document.getElementById('root'));
registerServiceWorker();


