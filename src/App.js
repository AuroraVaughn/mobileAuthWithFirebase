import firebase from 'firebase'
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAAgs69_cU_6xe2pByDZDESZkCKBMo9f_A',
      authDomain: 'auth-udem.firebaseapp.com',
      databaseURL: 'https://auth-udem.firebaseio.com',
      projectId: 'auth-udem',
      storageBucket: 'auth-udem.appspot.com',
      messagingSenderId: '265615490714'
    })

  }
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    )
  }
}
export { App }
