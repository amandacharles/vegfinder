import React, { Component, PropTypes } from 'react';
import { Text, NavigatorIOS, View, TouchableHighlight } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import Main from './Main'
import Restaurant from './Restaurant'


class ListView extends Component {
  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  render() {
    const RestaurantRoute = {
      component: Restaurant,
      title: 'Restaurant',
      // passProps: { myProp: 'bar' }
    };
    return(
      <View>




      <TouchableHighlight onPress={() => this._handleNextPress(RestaurantRoute)}>
        <Text style={{marginTop: 300, alignSelf: 'center'}}>
          {/* See you on the other nav {this.props.myProp}! */}
          click me to go to page for an individual Restaurant
        </Text>
      </TouchableHighlight>
    </View>
    );
  }
}


export default ListView;
