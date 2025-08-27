/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

function App() {
  return (
    <SafeAreaView className={'bg-pink-200'}>
      <StatusBar />
      <View>
        <Text>안녕하세요</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
