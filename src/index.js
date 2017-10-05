import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FullBlackboard from './FullBlackboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FullBlackboard />, document.getElementById('root'));
registerServiceWorker();
