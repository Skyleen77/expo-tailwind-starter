import React, { useState } from 'react';
import {
  Text,
  TextInput as ReactTextInput,
  TextInputProps as ReactTextInputProps,
  View,
} from 'react-native';

interface TextInputProps extends ReactTextInputProps {
  label: string;
}

export const TextInput = ({ label, ...props }: TextInputProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <ReactTextInput
        className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
        {...props}
      />
    </View>
  );
};
