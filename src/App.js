import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common'
import LoginForm from './components/LoginForm';

class App extends Component {

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBv_7NjAd-DZFVAdy6bNesq9DYhpV6pAcU",
      authDomain: "authentication-1c212.firebaseapp.com",
      databaseURL: "https://authentication-1c212.firebaseio.com",
      projectId: "authentication-1c212",
      storageBucket: "authentication-1c212.appspot.com",
      messagingSenderId: "125874801932"
    });
  }
  render() {
    console.log('Hi From App.js');
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
};

export default App;
