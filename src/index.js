// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< Updated upstream
const element = <h1>Hello, Platzi Badges!</h1>;
=======
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

import App from './components/App'
>>>>>>> Stashed changes

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
<<<<<<< Updated upstream
ReactDOM.render(element, container);
=======
ReactDOM.render(<App />, container)
>>>>>>> Stashed changes
