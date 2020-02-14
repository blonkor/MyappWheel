import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Const from '../const';

export class SplashScreen extends Component {
  onPress = () => {
    Actions[Const.screens.wheel]({});
  };
  render() {
    return (
      <View style={{backgroundColor: '#1c6969', flex: 1}}>
        <Text style={{marginTop: 100, marginHorizontal: 100}}>
          SplashScreen
        </Text>
        <Button title={'Wheel'} onPress={this.onPress} />
      </View>
    );
  }
}
export default SplashScreen;
