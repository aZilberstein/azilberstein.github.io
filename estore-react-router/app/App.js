import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import { Route, Router, hashHistory } from 'react-router';

import HomePage from './HomePage';
import CategoryMenPage from './CategoryMenPage';
import CategoryWomenPage from './CategoryWomenPage';
import CategoryKidsPage from './CategoryKidsPage';
import SoonPage from './SoonPage';

const config = {
    apiKey: "AIzaSyBQ8mihlohe3Zr191lAvWFfI51Q0v6_wpY",
    authDomain: "estoredb-89395.firebaseapp.com",
    databaseURL: "https://estoredb-89395.firebaseio.com",
    storageBucket: "estoredb-89395.appspot.com",
    messagingSenderId: "693950878588"
  };
firebase.initializeApp(config);

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={HomePage} />
		<Route path="men" component={CategoryMenPage} />
		<Route path="women" component={CategoryWomenPage} />
		<Route path="kids" component={CategoryKidsPage} />
		<Route path="soon" component={SoonPage} />
	</Router>,
	document.getElementById('app')	 
);