import React, { Component } from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './src/component/LoginForm/LoginForm';
import { Font } from 'expo';

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('./assets/fonts/Roboto.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          {
            this.state.fontLoaded ? (<Text style={styles.textLogo}>Pulse</Text>) : (<Text style={styles.defaultTextLogo}>Pulse</Text>)
          }
          <Text style={styles.logoMessage} > Welcome to Pulse, Please Login</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer :{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.7)',
  },
  defaultTextLogo: { 
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.7)',
  },
  logoMessage: {
    color: 'rgba(255,255,255, 0.7)',
  }
});
