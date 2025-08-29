import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

interface WeeklyDateItemProps {
  day: number;
  dayName: string;
  dayOfWeek: number;
  isSelected: boolean;
  isToday: boolean;
  onPress: (day: number) => void;
}

const WeeklyDateItem: React.FC<WeeklyDateItemProps> = ({
  day,
  dayName,
  dayOfWeek,
  isSelected,
  isToday,
  onPress,
}) => {
  const getDayNameColor = () => {
    if (dayOfWeek === 0) return 'text-red-500';
    if (dayOfWeek === 6) return 'text-blue-500';
    return 'text-gray-600';
  };

  return (
    <TouchableOpacity onPress={() => onPress(day)} className="mx-2">
        <View className={`w-16 h-20 items-center justify-center rounded-2xl `}>
          <Text className={`text-xs mb-1 ${getDayNameColor()}`}>{dayName}</Text>
          <View
            className={`${
              isSelected &&
              'w-10 h-10 items-center justify-center rounded-full border-2 border-blue-500 '
            }`}
          >
            <Text
              className={`text-lg  text-gray-800 ${isToday && 'font-bold'}`}
            >
              {day}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
};

export default WeeklyDateItem;
