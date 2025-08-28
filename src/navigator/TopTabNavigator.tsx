import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FirstTabView from '../screens/top-tabs/FirstTabView.tsx';
import SecondTabView from '../screens/top-tabs/SecondTabView.tsx';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <View className={'flex-1 w-full'}>
      {/* 드래그 핸들 */}
      <View className={'items-center py-2 border-t-[1px] border-gray-200'}>
        <View className={'w-10 h-1 bg-gray-300 rounded-full'} />
      </View>

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
        <Tab.Screen name={'식단'} component={FirstTabView} />
        <Tab.Screen name={'운동'} component={SecondTabView} />
        <Tab.Screen name={'신체'} component={SecondTabView} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTabNavigator;
