import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './assets/bootstrap.min.css';
import './assets/index.css';

import Main from './containers/_main';

ReactDOM.render(<Main repositoryListLength={5} />, document.getElementById('root'));

registerServiceWorker();
