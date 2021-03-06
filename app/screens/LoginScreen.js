import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginForm } from '../components';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onPressLogin = () => {
        if (this.state.email === '' || this.state.password === '') {
            alert('empty state');
        } else {
            firebase.auth()
              .signInWithEmailAndPassword(this.state.email, this.state.password)
              .then((user) => {
                  this.setState({ password: '' });
                  this.props.navigation.navigate('mainFlow');
              })
              .catch(function (error) {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  if (errorCode === 'auth/wrong-password') {
                      alert('Wrong password.');
                  } else if (errorCode === 'auth/user-not-found') {
                      alert('User not found.');
                  } else if (errorCode === 'auth/invalid-email') {
                      alert('Invalid email.');
                  } else if (errorCode === 'auth/user-disabled') {
                      alert('User disabled.');
                  }
              });
        }

    };

    onPressSignUp = () => {
        if (this.state.email === '' || this.state.password === '') {
            alert('empty state');
        } else {
            firebase.auth()
              .createUserWithEmailAndPassword(this.state.email, this.state.password)
              .then((user) => {
                  this.setState({ password: '' });
                  this.props.navigation.navigate('accountSetup');
              })
              .catch(function (error) {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  if (errorCode === 'auth/email-already-in-use') {
                      alert('Email already in use.');
                  } else if (errorCode === 'auth/operation-not-allowed') {
                      alert('Unknown error');
                  } else if (errorCode === 'auth/invalid-email') {
                      alert('Invalid email.');
                  } else if (errorCode === 'auth/weak-password') {
                      alert('Weak password.');
                  }
              });
        }

    };

    onQuickLogin = () => {
        firebase.auth()
          .signInWithEmailAndPassword('abcd1234@email.com', 'password')
          .then((user) => {
              this.props.navigation.navigate('mainFlow');
          });
    };

    render() {
        return (
          <LoginForm onPressLogin={this.onPressLogin} onPressSignUp={this.onPressSignUp}
                     onChangeEmail={(email) => this.setState({ email: email })}
                     onChangePassword={(password) => this.setState({ password: password })}
                     email={this.state.email} password={this.state.password}
                     onQuickLogin={this.onQuickLogin}/>
        );
    }
}