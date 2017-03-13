import React, { Component, PropTypes } from 'react';
import { Text, NavigatorIOS, View, TouchableHighlight } from 'react-native';
import { Button, Card, CardSection } from './common';
import LoginForm from './LoginForm';
import ListView from './ListView';
import MapView from './MapView';
import Favorites from './Favorites'

class Main extends Component {
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
      <View>


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



<View style={{marginTop: 40, alignSelf: 'center'}}>
      { false ? (<Text style={{fontSize: 50}}>
        LOGGED IN / true ternary from Main
      </Text>) : (

        
        <LoginForm />
      )
    }
  </View>
    </View>
    );
  }
}


export default Main;
