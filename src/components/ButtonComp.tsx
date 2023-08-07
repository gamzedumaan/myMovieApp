import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../theme/theme';

export type Buttons = {
  title: string;
  onPress: () => void;
  onPress2: () => void;
};
export default function ButtonComp({title, onPress}: Buttons) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    height: 40,
    width: '80%',
    backgroundColor: COLORS.Orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.White,
    fontSize: 20,
    fontFamily: FONTS.primary,
  },
});
