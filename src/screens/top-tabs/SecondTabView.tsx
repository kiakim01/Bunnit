import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const SecondTabView = () => {
  return (
    <SafeAreaView className={'h-full bg-white'}>
      <View
        className={'flex justify-center items-center flex-1 px-5 pt-6 h-full'}
      >
        <Text>SecondTabView</Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondTabView;
