
import React, { Component } from 'react';
import { Text, View, NavigatorIOS } from 'react-native';
import LoginForm from './components/LoginForm';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: 'Veg',
        }}
        style={{flex: 1}}
      />
    );
  }
}



export default App;
