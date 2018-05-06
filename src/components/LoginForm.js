import firebase from 'firebase'
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, TextField, Spinner } from './common'
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
}
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress() {
    this.setState({ error: '', loading: true })
    const { email, password } = this.state
    console.log('email: ', email, 'password: ', password)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch((() => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      }))
  }
  onLoginFail() {
    console.log('login failed')
    this.setState({ error: 'Authentication Failed.', loading: false })
  }
  onLoginSuccess() {
    console.log('login success')
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }
  renderButton() {
    if (this.state.loading) return <Spinner size='small' />

    return (<Button
      onPress={this.onButtonPress.bind(this)}
    >Login</Button>
    )
  }

  render() {
    const { errorTextStyle } = styles
    return (
      <Card>
        <CardSection>
          <TextField
            placeholder={'my_email@domain.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <Text style={errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <TextField
            secureTextEntry
            isPassword={true}
            placeholder={'password'}
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}
export default LoginForm
