import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FirstTabView from '../screens/top-tabs/FirstTabView.tsx';
import SecondTabView from '../screens/top-tabs/SecondTabView.tsx';
import { Text, TouchableOpacity, View } from 'react-native';
import ThirdTabView from '../screens/top-tabs/ThirdTabView.tsx';

// const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: '식단', count: 0 },
    { name: '운동', count: 0 },
    { name: '신체', count: 0 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <FirstTabView />;
      case 1:
        return <SecondTabView />;
      case 2:
        return <ThirdTabView />;
      default:
        return null;
    }
  };
  return (
    <View className={'flex-1 w-full'}>
      {/* 드래그 핸들 */}
      <View className={'items-center py-2 border-t-[1px] border-gray-200'}>
        <View className={'w-10 h-1 bg-gray-300 rounded-full'} />
      </View>

      <View className="flex-1 bg-white">
        {/* 커스텀 탭 헤더 */}
        <View className="flex justify-center items-center flex-row bg-slate-50  border-b border-gray-100">
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              className={`flex-1 items-center justify-center py-2 px-2 rounded-lg mx-1 ${
                activeTab === index
                  ? 'bg-white border border-slate-200'
                  : 'bg-transparent'
              }`}
              onPress={() => setActiveTab(index)}
            >
              <Text
                className={`text-center text-base font-medium mb-1 ${
                  activeTab === index ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {tab.name} {'  '}
                {tab.count}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 탭 콘텐츠 */}
        <View className="flex-1">{renderTabContent()}</View>
      </View>
    </View>
  );
};

export default TopTabNavigator;
