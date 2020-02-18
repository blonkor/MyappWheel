import React, {Component} from 'react';
import {Button, View, Animated, Text} from 'react-native';
import Slice from './Slice';
import styles from './Wheel.style';

const weekDays = [
  {
    key: 'Monday',
    amount: 1,
    svg: {fill: '#155f51'},
  },
  {
    key: 'Tuesday',
    amount: 1,
    svg: {fill: '#1b6e5f'},
  },
  {
    key: 'Wednesday',
    amount: 1,
    svg: {fill: '#207566'},
  },
  {
    key: 'Thursday',
    amount: 1,
    svg: {fill: '#298574'},
  },
  {
    key: 'Friday',
    amount: 1,
    svg: {fill: '#329482'},
  },
  {
    key: 'Saturday',
    amount: 1,
    svg: {fill: '#3aa18e'},
  },
  {
    key: 'Sunday',
    amount: 1,
    svg: {fill: '#49ad9b'},
  },
];

export default class App extends Component {
  state = {
    animValue: new Animated.Value(0.1),
    inputRange: [0, 100],
    outputRange: ['10deg', '360deg'],
    disabledButton: false,
  };

  componentWillMount() {
    this.createAnimate();
  }

  createAnimate = () => {
    this._animatedValue = new Animated.Value(0);
    const startDeg = Math.floor(Math.random() * 360);
    const maxSplit = Math.floor(Math.random() * 33 + 3);
    this.setState({
      outputRange: [`${startDeg}deg`, `${maxSplit * 30}deg`],
    });
  };

  rotate = () => {
    Animated.timing(this._animatedValue, {
      toValue: 100,
      duration: 3000,
    }).start();
    this.setState({disabledButton: true});
  };

  render() {
    const {inputRange, outputRange, disabledButton} = this.state;
    const interpolatedRotateAnimation = this._animatedValue.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <View style={styles.wheelContainer}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Random week day</Text>
        </View>
        <Animated.View
          style={[{transform: [{rotate: interpolatedRotateAnimation}]}]}>
          <Slice
            weekDays={weekDays}
            interpolatedRotateAnimation={interpolatedRotateAnimation}
          />
        </Animated.View>
        <Button
          style={styles.button}
          onPress={this.rotate}
          title={'Rotate'}
          color={'#1ea4a9'}
          disabled={disabledButton}
        />
      </View>
    );
  }
}
