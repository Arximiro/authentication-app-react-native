import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
    ref: this.LoginForm
  };

  onButtonPress = async () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (e) {
        this.setState({ error: 'Authentication Failed' });
      }
    } finally {
      if (this.state.ref) {
        this.setState({ loading: false });
        this.setState({ email: '', password: '' });
      }
    }
  };

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size='small' />
    } else {
      return (
        <Button onPress={this.onButtonPress}>
          Login
        </Button>
      )
    }
  };

  render() {
    const { error, success } = styles;

    return (
      <Card>
        <CardSection>
          <Input
            label={'Email:'}
            placeholder={'example@test.com'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Password:'}
            placeholder={'password'}
            secure={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={error}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;


// Explanation of this code
//
//      if (this.state.ref) {
//        this.setState({ loading: false });
//        this.setState({ email: '', password: '' });
//      }

// So.. what happens here is if these setState calls happen, since they are done immediately after the async process of user authentication...
// if I don't put them in this if block I get a warning from React about updating the state on a component that is not mounted.
// Since anytime the auth status changes over in App.js it triggers a re-render and loads the logout button instead of LoginForm.
// By the time it gets to this code the LoginForm has unmounted, thus no longer exists.
// This if block will make sure the component exists before setting the state.
