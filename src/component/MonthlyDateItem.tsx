import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

interface DateItemProps {
  day: number | null;
  dayIndex: number;
  isSelected: boolean;
  isToday: boolean;
  onPress: (day: number) => void;
  disabled?: boolean;
}

const MonthlyDateItem: React.FC<DateItemProps> = ({
  day,
  dayIndex,
  isSelected,
  isToday,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      className={'flex-1 aspect-square items-center justify-center'}
      disabled={disabled || !day}
      onPress={() => {
        if (day) {
          onPress(day);
        }
      }}
    >
      {day && (
        <View
          className={`w-10 h-10 items-center justify-center rounded-full ${
            isSelected && 'border-blue-500 border-2'
          }`}
        >
          <Text
            className={`text-base text-gray-800 ${
              isToday
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
};

export default MonthlyDateItem;
