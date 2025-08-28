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
  return (
    <TouchableOpacity onPress={() => onPress(day)} className="mx-2">
      <View
        className={`w-16 h-20 items-center justify-center rounded-2xl ${
          isSelected ? 'border-blue-500 border-2' : ''
        }`}
      >
        <Text
          className={`text-xs mb-1 ${
            dayOfWeek === 0
              ? 'text-red-500'
              : dayOfWeek === 6
              ? 'text-blue-500'
              : 'text-gray-600'
          }`}
        >
          {dayName}
        </Text>
        <Text
          className={`text-lg ${isToday ? 'text-blue-500' : 'text-gray-800'}`}
        >
          {day}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WeeklyDateItem;
