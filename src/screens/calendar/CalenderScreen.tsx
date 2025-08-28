import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const CalenderScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState<number>();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // 이전 달의 마지막 날들 (빈 칸)
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // 현재 달의 날짜들
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    // 마지막 주를 채우기 위한 빈 칸
    while (days.length % 7 !== 0) {
      days.push(null);
    }

    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };

  const days = getDaysInMonth(currentDate);
  const today = new Date();
  const isToday = (day: number | null) => {
    if (!day) return false;
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <SafeAreaView className={'h-full bg-white'}>
      <View className={'flex-1 px-5 pt-6'}>
        {/* 헤더: 월/연도 표시 및 네비게이션 */}
        <View className={'flex-row justify-between items-center mb-6'}>
          <TouchableOpacity onPress={goToPreviousMonth} className={'p-2'}>
            <Text className={'text-2xl text-gray-600'}>‹</Text>
          </TouchableOpacity>

          <View className={'items-center'}>
            <Text className={'text-xl font-bold text-gray-800'}>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </Text>
          </View>

          <TouchableOpacity onPress={goToNextMonth} className={'p-2'}>
            <Text className={'text-2xl text-gray-600'}>›</Text>
          </TouchableOpacity>
        </View>

        {/* 요일 헤더 */}
        <View className={'flex-row mb-2'}>
          {daysOfWeek.map((day, index) => (
            <View key={index} className={'flex-1 items-center py-2'}>
              <Text
                className={`text-sm font-medium ${
                  index === 0
                    ? 'text-red-500'
                    : index === 6
                    ? 'text-blue-500'
                    : 'text-gray-600'
                }`}
              >
                {day}
              </Text>
            </View>
          ))}
        </View>

        {/* 달력 그리드 */}
        <FlatList
          data={days}
          numColumns={7}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: day, index }) => {
            const dayIndex = index % 7;
            return (
              <TouchableOpacity
                className={'flex-1 aspect-square  items-center justify-center'}
                disabled={!day}
                onPress={() => {
                  if (day) {
                    setSelectDate(day);
                  }
                }}
              >
                {day && (
                  <View
                    className={`w-10 h-10 items-center justify-center rounded-full ${
                      selectDate === day ? 'border-blue-500 border-2 ' : ''
                    }`}
                  >
                    <Text
                      className={`text-base text-gray-800 ${
                        isToday(day)
                          ? 'font-bold'
                          : dayIndex === 0
                          ? 'text-red-500'
                          : dayIndex === 6
                          ? 'text-blue-500'
                          : ''
                      }`}
                    >
                      {day}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          }}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalenderScreen;
