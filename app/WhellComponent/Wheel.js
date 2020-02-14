import React, {Component} from 'react';
import {Button, View, Animated, Text} from 'react-native';
import SVG, {G, Path} from 'react-native-svg';
import styles from './Wheel.style';
// import Slice from './Slice';
import * as shape from 'd3-shape';
const d3 = {shape};

const weekDays = [
  {
    name: 'Monday',
    number: 1,
    color: '#155f51',
    context: 'suka',
    startAngle: 0,
  },
  {
    name: 'Tuesday',
    number: 1,
    color: '#1b6e5f',
    context: 'suka2',
    startAngle: 0,
  },
  {
    name: 'Wednesday',
    number: 1,
    color: '#207566',
    startAngle: 0,
  },
  {
    name: 'Thursday',
    number: 1,
    color: '#298574',
    startAngle: 0,
  },
  {
    name: 'Friday',
    number: 1,
    color: '#329482',
    startAngle: 0,
  },
  {
    name: 'Saturday',
    number: 1,
    color: '#3aa18e',
    startAngle: 0,
  },
  {
    name: 'Sunday',
    number: 1,
    color: '#49ad9b',
    startAngle: 0,
  },
];
// const weekDays = [5, 2, 7, 1, 1, 3, 4, 9];
// export default class App extends Component {
//   state = {
//     animValue: new Animated.Value(0.1),
//     inputRange: [0, 100],
//     outputRange: ['10deg', '360deg'],
//     disabledButton: false,
//   };
//
//   componentWillMount() {
//     this.createAnimate();
//   }
//
//   createAnimate = () => {
//     this._animatedValue = new Animated.Value(0);
//     const startDeg = Math.floor(Math.random() * 360);
//     const maxSplit = Math.floor(Math.random() * 33 + 3);
//     this.setState({
//       outputRange: [`${startDeg}deg`, `${maxSplit * 30}deg`],
//     });
//   };
//
//   rotate = () => {
//     Animated.timing(this._animatedValue, {
//       toValue: 100,
//       duration: 3000,
//     }).start();
//     this.setState({disabledButton: true});
//   };
//
//   translate = (x, y) => {
//     return `translate(${x}, ${y})`;
//   };
//
//   renderPie = () => {
//     let pie = d3.shape.pie();
//     let endAngle = (this.state.animValue, Math.PI * 2);
//     return (
//       <G transform={this.translate(100, 100)}>
//         {pie(weekDays).map((item, index) => (
//           <Slice
//             index={index}
//             endAngle={endAngle}
//             color={item.color}
//             value={item.number}
//             label={item.name}
//             key={'pie_shape_' + index}
//           />
//         ))}
//       </G>
//     );
//   };
//
//   render() {
//     let endAngle = (this.state.animValue, Math.PI * 2);
//     const {inputRange, outputRange, disabledButton} = this.state;
//     const interpolatedRotateAnimation = this._animatedValue.interpolate({
//       inputRange,
//       outputRange,
//     });
//
//     return (
//       <View style={styles.wheelContainer}>
//         <Text style={styles.headerText}>Random week day</Text>
//         <Animated.View
//           style={[
//             styles.circle,
//             {transform: [{rotate: interpolatedRotateAnimation}]},
//           ]}>
//           <SVG width={200} height={200} viewBox={'-100 -100 200 200'}>
//             <G>{this.renderPie()}</G>
//           </SVG>
//         </Animated.View>
//         <Button
//           style={styles.button}
//           onPress={this.rotate}
//           title={'Rotate'}
//           color={'#1ea4a9'}
//           disabled={disabledButton}
//         />
//       </View>
//     );
//   }
// }

function translate(x, y) {
  return `translate(${x}, ${y})`;
}

class Slice extends React.Component {
  render() {
    let {value, label, fill, innerRadius = 0, outerRadius} = this.props;
    let arc = d3.shape
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
    return (
      <G>
        <Path d={arc(value)} fill={fill} />
        <Text
          transform={translate(...arc.centroid(value))}
          dy=".35em"
          className="label">
          {label}
        </Text>
      </G>
    );
  }
}

class Pie extends React.Component {
  constructor(props) {
    super(props);
    // this.colorScale = d3.scale.category10();
    this.renderSlice = this.renderSlice.bind(this);
  }

  render() {
    let {x, y, data} = this.props;
    let pie = d3.shape.pie();
    return <G transform={translate(x, y)}>{pie(data).map(this.renderSlice)}</G>;
  }

  renderSlice(value, i) {
    const val = weekDays[i];
    return (
      <Slice
        key={i}
        outerRadius={this.props.radius}
        value={value}
        label={val.color}
        fill={val.color}
      />
    );
  }
}

export default class Wheel extends React.Component {
  render() {
    const data = [1, 1, 1, 1, 1, 1, 1];
    let width = 300;
    let height = 300;
    let minViewportSize = Math.min(width, height);
    let radius = (minViewportSize * 0.9) / 2;
    let x = width / 2;
    let y = height / 2;

    return (
      <SVG width="100%" height="100%">
        <Pie x={x} y={y} radius={radius} data={data} />
      </SVG>
    );
  }
}
