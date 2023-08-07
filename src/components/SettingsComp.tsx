import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {COLORS, FONTS} from '../theme/theme';
export default function SettingsComp(props: any) {
  return (
    <View style={styles.container}>
      <AntDesign name={props.name} size={24} color={COLORS.White} />
      <View style={styles.settingContainer}>
        <Text style={styles.title}>{props.heading}</Text>
        <Text style={styles.subtitle}>{props.subheading}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
      <View style={styles.iconBG}>
        <AntDesign name="right" size={24} color={COLORS.White} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  settingContainer: {
    flex: 1,
    margin: 15,
  },
  iconStyle: {
    color: COLORS.White,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  iconBG: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONTS.primary,
    fontSize: 15,
    color: COLORS.White,
  },
  subtitle: {
    fontFamily: FONTS.primary,
    fontSize: 14,
    color: COLORS.Grey,
    marginTop: 5,
  },
});
