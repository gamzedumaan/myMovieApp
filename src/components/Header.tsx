import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../theme/theme';
import {useNavigation} from '@react-navigation/native';

export default function Header({position = 'absolute'}) {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        style={[styles.icon, {position}]}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={24} color={COLORS.White} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.Orange,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    zIndex: 9999999,
    
  },
});
