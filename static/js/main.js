// jQuery Modules initialisation
var ConsoleLogger = require('./src/console-logger');

ConsoleLogger.init();


// React Modules initialisation
import React from 'react';
import ReactDOM from 'react-dom';

import GithubRepoSelector from './src/components/GithubRepoSelector.jsx';

ReactDOM.render(<GithubRepoSelector/>, document.getElementById('react-github-repo-selector'));
