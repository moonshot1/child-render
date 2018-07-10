import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Container from './Container';
import Container2 from './Container2';
import Container3 from './Container3';

ReactDOM.render(<Container3 />, document.getElementById('root'));
registerServiceWorker();
