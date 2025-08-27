import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FirstTabView from '../view/FirstTabView.tsx';
import SecondTabView from '../view/SecondTabView.tsx';

const Tab = createMaterialTopTabNavigator();

const MainNavigator = () => {
  const { width: windowWidth } = Dimensions.get('window');

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#111827',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarIndicatorStyle: {
          backgroundColor: '#50BDFA',
        },
        tabBarLabelStyle: { fontSize: 16, fontWeight: '500' },
        tabBarStyle: {
          shadowOpacity: 0,
          elevation: 0,
          borderWidth: 0,
        },
      }}
    >
      <Tab.Screen name={'First'} component={FirstTabView} />
      <Tab.Screen name={'Second'} component={SecondTabView} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
