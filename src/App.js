import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {

    firebase.initializeApp({
      apiKey: "AIzaSyBv_7NjAd-DZFVAdy6bNesq9DYhpV6pAcU",
      authDomain: "authentication-1c212.firebaseapp.com",
      databaseURL: "https://authentication-1c212.firebaseio.com",
      projectId: "authentication-1c212",
      storageBucket: "authentication-1c212.appspot.com",
      messagingSenderId: "125874801932"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    const { button, spinner } = styles;

    switch (this.state.loggedIn) {
      case true:
        return (
        <View style={button}>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </View>
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <View style={spinner}> 
            <Spinner />
          </View>
        );        
    }
  }    


  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
};

styles = {
  button: {
    padding: 5,
    flexDirection: 'row'
  },
  spinner: {    
    padding: 40
  }
};


export default App;

// Firebase.auth().onAuthStateChanged() is called automatically when the auth status of Firebase changes.
// It has access to a user object you can use in a callback function.
