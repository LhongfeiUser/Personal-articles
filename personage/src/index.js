import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterMap from './router/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterMap />, document.getElementById('root'));
registerServiceWorker();
