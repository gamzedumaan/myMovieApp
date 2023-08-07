import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, Pressable} from 'react-native';
import {COLORS, FONTS} from '../theme/theme';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const InputHeader = ({searchFunction, isHome}) => {
  const [searchText, setSearchText] = useState<string>('');
  const navigation = useNavigation();

  return (
    <Pressable style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="Search your Movies..."
        placeholderTextColor={COLORS.Orange}
      />

      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() =>
          isHome
            ? navigation.navigate('SearchScreen')
            : searchFunction(searchText)
        }>
        <Feather name="search" size={24} color={COLORS.Orange} />
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: COLORS.Orange,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10,
  },
  textInput: {
    width: '90%',
    fontFamily: FONTS.primary,
    fontSize: 20,
    color: COLORS.Orange,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputHeader;
