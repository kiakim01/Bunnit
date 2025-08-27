import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SecondTabView = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView className={'h-full bg-white'}>
      {/*<HeaderGoBackImg goBack={navigation.goBack} title={''} />*/}
      <View className={'flex-1 px-5 pt-6 h-full'}>
        <Text>SecondTabView</Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondTabView;
