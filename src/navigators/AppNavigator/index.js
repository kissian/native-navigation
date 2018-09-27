import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../../screens/LoginScreen';
// import MainScreen from '../../components/MainScreen';
// import ProfileScreen from '../../components/ProfileScreen';

const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  // Main: { screen: MainScreen },
  // Profile: { screen: ProfileScreen },
});
export default AppNavigator;