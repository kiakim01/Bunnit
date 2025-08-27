import React from 'react';
import { View } from 'react-native';
import MainNavigator from '../navigator/MainNavigator.tsx';

const Main = () => {
  return (
    <View className={'flex-1 h-full'}>
      <View className={'flex-1'}>
        <MainNavigator />
      </View>
    </View>
  );
};

export default Main;
