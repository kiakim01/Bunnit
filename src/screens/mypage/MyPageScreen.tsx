import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const MyPageScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView className={'h-full bg-white'}>
      <View className={'flex-1 px-5 pt-6 h-full'}>
        <Text>MyPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyPageScreen;
