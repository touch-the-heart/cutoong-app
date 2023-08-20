import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CoupleAccountScreen from '../screens/CoupleAccountScreen';
import CoupleScreen from '../screens/CoupleScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="CoupleAccount" component={CoupleAccountScreen} />
        <Tab.Screen name="Couple" component={CoupleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
