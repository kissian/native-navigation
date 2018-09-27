import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppNavigator from '../../navigators/AppNavigator';

class AppContainer extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.getStartedText}>text1</Text>
        <AppNavigator />
        <Text style={styles.getStartedText}>text2</Text>
        <AppNavigator />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    fontSize: 17,
    color: '#111111',
    lineHeight: 24,
    textAlign: 'center',
  },
});
export default AppContainer;