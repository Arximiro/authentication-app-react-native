import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
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
      this.setState({ loading: false });
      this.setState({ email: '', password: '' });
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
