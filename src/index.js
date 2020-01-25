import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import Main from './views/Main';
import Crypto from './views/Crypto';

import {
    BrowserRouter as Root,
    Route,
    // Switch,
    
    Link,
    // useRouteMatch,
    // useParams
  } from "react-router-dom";

ReactDOM.render(
    <Root>
      <Route exact path="/" component={Main} />
      <Route exact path="/crypto" component={Crypto} />
    </Root>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
