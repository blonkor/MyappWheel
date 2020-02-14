import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Screens from './screens';
import Const from './const';

export class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key={Const.screens.splashScreen}
            component={Screens.SplashScreen}
            headerMode="none"
            hideNavBar
          />
          <Scene
            key={Const.screens.wheel}
            component={Screens.Wheel}
            headerMode="none"
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}

export default Navigation;
