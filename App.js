import React from 'react';
import { MainNavigator } from './app/navigators';
import firebase from 'firebase';
import config from './firebaseconfig';

firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator/>
    );
  }
}
