import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';


export default class LoginForm extends Component {
  render(){
    return(
      <View style= {styles.container} >
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor = "rgba(255,255,255,0.2)"
          style = {styles.input}
        />
        <TextInput
           placeholder="Password"
           placeholderTextColor = "rgba(255,255,255,0.2)"
           secureTextEntry
          style = {styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:10,

  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    width: 320,
    paddingHorizontal: 10,
    color: 'rgba(189, 195, 199,1.0)'
  },
  button: {
    width: 320,
    paddingVertical: 20,
    backgroundColor: 'rgba(41, 128, 185, 0.5)',
    marginBottom: 30,
  },
  buttonText: {
    color: 'rgba(255,255,255, 0.7)',
    alignSelf: 'center',
    fontWeight: 'bold',
  }
});