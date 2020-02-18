import {PieChart} from 'react-native-svg-charts';
import styles from './Wheel.style';
import {Text} from 'react-native';
import React from 'react';
import {G} from 'react-native-svg';

export default class Slice extends React.PureComponent {
  render() {
    const Labels = ({slices}) => {
      return slices.map((slice, index) => {
        const {labelCentroid, data} = slice;
        return (
          <G key={index} x={labelCentroid[0] - 25} y={labelCentroid[1] - 10}>
            <Text>{data.key}</Text>
          </G>
        );
      });
    };
    return (
      <PieChart
        style={styles.wheel}
        valueAccessor={({item}) => item.amount}
        data={this.props.weekDays}
        spacing={0}
        outerRadius={'95%'}>
        <Labels />
      </PieChart>
    );
  }
}
