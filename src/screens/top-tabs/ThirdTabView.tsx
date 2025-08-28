import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const ThirdTabView = () => {
  return (
    <SafeAreaView className={'h-full bg-white'}>
      <View
        className={'flex justify-center items-center flex-1 px-5 pt-6 h-full'}
      >
        <Text>ThirdTabView</Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdTabView;
