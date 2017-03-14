import React, { Component, PropTypes } from 'react';
import { Text, NavigatorIOS, View, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection } from './common';
import LoginForm from './LoginForm';
import ListView from './ListView';
import MapView from './MapView';
import Favorites from './Favorites'

class Main extends Component {
  state = {
      loggedIn: null
    };

    componentWillMount() {
      firebase.initializeApp({
     apiKey: "AIzaSyDx71C6FD5q94K-VJPxLeZdSFDNnS87ceE",
     authDomain: "vegfinder-f661b.firebaseapp.com",
     databaseURL: "https://vegfinder-f661b.firebaseio.com",
     storageBucket: "vegfinder-f661b.appspot.com",
     messagingSenderId: "900081377754"
    });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }

  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  render() {
    const ListViewRoute = {
      component: ListView,
      title: 'ListView',
      // passProps: { myProp: 'bar' }
    };
    const MapViewRoute = {
      component: MapView,
      title: "MapView"
    }
    const FavoritesRoute = {
      component: Favorites,
      title: 'Favorites'
    }

    return(
      <View style={{flex:1}}>
        <View style={{marginTop: 40}}>
      { (this.state.loggedIn) ?
         ( <View>
           <TouchableHighlight onPress={() => this._handleNextPress(ListViewRoute)}>
           <Text style={{marginTop: 200, alignSelf: 'center'}}>
             {/* See you on the other nav {this.props.myProp}! */}
             click me to go to ListView
           </Text>
         </TouchableHighlight>

         <TouchableHighlight onPress={() => this._handleNextPress(FavoritesRoute)}>
           <Text style={{marginTop: 10, alignSelf: 'center'}}>
             {/* See you on the other nav {this.props.myProp}! */}
             click me to go to FAVORITES
           </Text>
         </TouchableHighlight>

         <TouchableHighlight onPress={() => this._handleNextPress(MapViewRoute)}>
           <Text style={{marginTop: 10, alignSelf: 'center'}}>
             {/* See you on the other nav {this.props.myProp}! */}
             click me to go to MapView
           </Text>
         </TouchableHighlight>
       </View>)

      : (
        <View >
        <LoginForm />
      </View>
      )
    }
  </View>
    </View>
    );
  }
}


export default Main;
