import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faGlasses,
  faSignOutAlt,
  faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons';
import * as serviceWorker from './serviceWorker';
import App from './App';

library.add(faGithub, faGlasses, faSignOutAlt, faAngleDoubleDown);

ReactDOM.render(
  <BrowserRouter basename="/via-app/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
