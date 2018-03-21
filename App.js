import React, { Component } from 'react';
import { AppRegistry, View , Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'stretch'}}>
        <View style={{height: 50, backgroundColor: 'powderblue'}}>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
