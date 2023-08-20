import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CSScreen from './component/cs';
import TabNavigator from './navigation';

const App = (): JSX.Element => {
  return (
    <CSScreen>
      <TabNavigator />
    </CSScreen>
  );
};

export default App;
