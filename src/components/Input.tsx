import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../theme/theme';

export type Inputs = {
  placeholder: string;
  onChangeText: () => void;
  value: string;
  secureTextEntry: boolean;
};
export default function Input({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
}: Inputs) {
  return (
    <View>
      <TextInput
        placeholderTextColor={COLORS.White}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    width: '90%',
    borderColor: COLORS.Orange,
    fontSize: 14,
    color: '#fff',
    marginTop: 20,
    margin: 10,
    fontFamily: FONTS.primary,
  },
});
