import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/home/HomeScreen.tsx';
import CalenderScreen from '../screens/calendar/CalenderScreen.tsx';
import LibraryScreen from '../screens/library/LibraryScreen.tsx';
import MyPageScreen from '../screens/mypage/MyPageScreen.tsx';

// Type definitions for navigation
export type BottomTabParamList = {
  Home: undefined;
  Calender: undefined;
  Library: undefined;
  MyPage: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

// Placeholder screens
// const HomeScreen = () => (
//   <View className="flex-1 items-center justify-center bg-white">
//     <Text className="text-2xl font-bold">Home Screen</Text>
//   </View>
// );
//
// const SearchScreen = () => (
//   <View className="flex-1 items-center justify-center bg-white">
//     <Text className="text-2xl font-bold">Search Screen</Text>
//   </View>
// );
//
// const ProfileScreen = () => (
//   <View className="flex-1 items-center justify-center bg-white">
//     <Text className="text-2xl font-bold">Profile Screen</Text>
//   </View>
// );
//
// const SettingsScreen = () => (
//   <View className="flex-1 items-center justify-center bg-white">
//     <Text className="text-2xl font-bold">Settings Screen</Text>
//   </View>
// );

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 3,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size || 24} />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          tabBarLabel: 'Calender',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size || 24} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size || 24} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarLabel: 'MyPage',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size || 24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
