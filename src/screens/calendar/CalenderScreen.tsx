import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import MonthlyDateItem from '../../component/MonthlyDateItem.tsx';
import WeeklyDateItem from '../../component/WeeklyDateItem.tsx';
import TopTabNavigator from '../../navigator/TopTabNavigator.tsx';

const CalenderScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState<number>();
  const [isMonthlyView, setIsMonthlyView] = useState<boolean>(false);
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
  const MAX_TRANSLATE_Y = 150; // MonthlyView
  const MIN_TRANSLATE_Y = 70; // WeeklyView
  const translateY = useSharedValue(MIN_TRANSLATE_Y);
  const updateViewMode = useCallback((value: boolean) => {
    setIsMonthlyView(value);
  }, []);

  const startY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onStart(() => {
      startY.value = translateY.value;
    })
    .onUpdate(event => {
      const newTranslateY = startY.value + event.translationY;
      // 제한 범위 내에서만 움직이도록 설정
      translateY.value = Math.max(
        MIN_TRANSLATE_Y,
        Math.min(MAX_TRANSLATE_Y, newTranslateY),
      );
    })
    .onEnd(() => {
      // 임계값에 따라 스냅 위치 결정
      const threshold = (MAX_TRANSLATE_Y + MIN_TRANSLATE_Y) / 2;

      if (translateY.value > threshold) {
        // 아래로 내려간 상태 (Monthly View)
        translateY.value = withSpring(MAX_TRANSLATE_Y, {
          damping: 15,
          stiffness: 150,
        });
        runOnJS(updateViewMode)(true);
      } else {
        // 위로 올라간 상태 (Weekly View)
        translateY.value = withSpring(MIN_TRANSLATE_Y, {
          damping: 15,
          stiffness: 150,
        });
        runOnJS(updateViewMode)(false);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className={'h-full bg-white'}>
        <View className={'flex-1 px-5 pt-6'}>
          {/* 헤더: 월/연도 표시 및 네비게이션 */}
          <View className={'flex-row justify-between items-center mb-4'}>
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

          {/* 캘린더 뷰 */}
          <Animated.View>
            {/* 요일 헤더 */}
            {isMonthlyView && (
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
            )}

            {isMonthlyView ? (
              <FlatList
                data={days}
                numColumns={7}
                keyExtractor={(_item, index) => index.toString()}
                renderItem={({ item: day, index }) => {
                  const dayIndex = index % 7;
                  return (
                    <MonthlyDateItem
                      day={day}
                      dayIndex={dayIndex}
                      isSelected={selectDate === day}
                      isToday={isToday(day)}
                      onPress={selectedDay => setSelectDate(selectedDay)}
                    />
                  );
                }}
                scrollEnabled={false}
              />
            ) : (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="py-4"
              >
                {days
                  .filter(day => day !== null)
                  .map((day, index) => {
                    const date = new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      day as number,
                    );
                    const dayOfWeek = date.getDay();
                    const dayName = daysOfWeek[dayOfWeek];

                    return (
                      <WeeklyDateItem
                        key={index}
                        day={day as number}
                        dayName={dayName}
                        dayOfWeek={dayOfWeek}
                        isSelected={selectDate === day}
                        isToday={isToday(day as number)}
                        onPress={selectedDay => setSelectDate(selectedDay)}
                      />
                    );
                  })}
              </ScrollView>
            )}
          </Animated.View>

          <GestureDetector gesture={gesture}>
            <Animated.View
              style={[
                {
                  height: '50%',
                },
                animatedStyle,
              ]}
            >
              <TopTabNavigator />
            </Animated.View>
          </GestureDetector>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default CalenderScreen;
