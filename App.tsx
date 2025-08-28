/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/screens/Main.tsx';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className={'flex-1'}>
        <Main />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
