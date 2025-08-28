import React from 'react';
import { View } from 'react-native';
import BottomTabNavigator from '../navigator/BottomTabNavigator.tsx';

const Main = () => {
  return (
    <View className={'flex-1 h-full'}>
      <View className={'flex-1'}>
        <BottomTabNavigator />
      </View>
    </View>
  );
};

export default Main;
