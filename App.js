import React, {Component} from 'react';
 import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import Router from './Router'
import {createLogger} from 'redux-logger'


class App extends React.Component {

  componentWillMount(){
    var config = {
    apiKey: "AIzaSyBFEKUlxymg0veAKizVmM3MrYTkLqa6bsQ",
    authDomain: "weatherapp-6d93d.firebaseapp.com",
    databaseURL: "https://weatherapp-6d93d.firebaseio.com",
    projectId: "weatherapp-6d93d",
    storageBucket: "weatherapp-6d93d.appspot.com",
    messagingSenderId: "307513143297"
  };
  firebase.initializeApp(config);
  };

  render(){
    const store = createStore(reducers,
     {},
     applyMiddleware(
      ReduxThunk,
      createLogger({collapsed: true})
      )
    )
    return(
      <Provider store={store}>
        <Router />
      </Provider>

    )
  }
}

export default App;
