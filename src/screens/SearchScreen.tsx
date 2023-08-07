import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../theme/theme';
import InputHeader from '../components/InputHeader';
import {searchMovies} from '../api/Apicalls';
import {useNavigation} from '@react-navigation/native';

export default function SearchScreen() {
  const [searchData, setSearchData] = useState([]);
  const navigation = useNavigation();
  const searchMoviesList = async searchText => {
    console.log(searchText);
    try {
      let response = await fetch(searchMovies(searchText));
      let json = await response.json();
      console.log(json);
      setSearchData(json.results);
    } catch (error) {
      console.error(
        ' Something went wrong in getUpcomingMoviesList Function',
        error,
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <InputHeader searchFunction={searchMoviesList} />
      <FlatList
        numColumns={2}
        data={searchData}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.containerImage}
              onPress={() => navigation.navigate('MovieDetailsScreen', item)}>
              <Image
                style={styles.imageUpComing}
                source={{
                  uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path,
                }}
              />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  title: {
    color: COLORS.White,
    fontFamily: FONTS.primary2,
    fontSize: 12,
  },
  containerImage: {
    height: SIZES.height / 3,
    width: SIZES.width / 2.2,
    alignItems: 'center',
    margin: 15,
  },
  imageUpComing: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    elevation: 10,
    opacity: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: COLORS.Orange,
  },
});
