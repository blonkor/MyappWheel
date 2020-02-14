// import React, {Component} from 'react';
// import {Text, View} from 'react-native';
// import {Path, TextPath, TSpan, Svg, G} from 'react-native-svg';
// import * as shape from 'd3-shape';
// const d3 = {shape};
//
// export default class Slice extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.arcGenerator = d3.shape
//       .arc()
//       .outerRadius(100)
//       .padAngle(0)
//       .innerRadius(0);
//   }
//   //
//   // createPieArc = (index, endAngle, data) => {
//   //   const arcs = d3.shape
//   //     .pie()
//   //     .value(item => item.number)
//   //     .startAngle(0)
//   //     .endAngle(endAngle)(data);
//   //
//   //   // var g = Svg.append('g').attr(
//   //   //   'transform',
//   //   //   'translate(' + 200 / 2 + ',' + 200 / 2 + ')',
//   //   // );
//   //   //
//   //   //
//   //
//   //   let arcData = arcs[index];
//   //   // const label = d3.shape
//   //   //   .arc()
//   //   //   .outerRadius(100)
//   //   //   .padAngle(0)
//   //   //   .innerRadius(100 - 80);
//   //   //
//   //   // var arc = g.selectAll(".arc")
//   //   //   .data(pie(data))
//   //   //   .enter().append("g")
//   //   //   .attr("class", "arc");
//   //
//   //   return this.arcGenerator(arcData);
//   // };
//
//   translate = (x, y) => {
//     return `translate(${x}, ${y})`;
//   };
//   render() {
//     //   const {endAngle, color, index, data} = this.props;
//
//     let {value, label, innerRadius = 0, outerRadius, color} = this.props;
//     let arc = d3.shape
//       .arc()
//       .innerRadius(innerRadius)
//       .outerRadius(outerRadius)
//       .padAngle(0);
//
//     // .outerRadius(100)
//     //
//     //     .innerRadius(0);
//     //    let val = data[index].name;
//     return (
//       <>
//         {/*<TextPath startOffset="-10%">{val}</TextPath>*/}
//         <Path
//           onPress={() => alert('value is: ' + label)}
//           d={arc(value)}
//           fill={color}
//           stroke="black"
//         />
//         <Text transform={this.translate(...d3.arc.centroid(value))} dy=".35em">
//           {label}
//         </Text>
//       </>
//     );
//   }
// }
