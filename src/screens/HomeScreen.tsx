import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {COLORS, FONTS} from '../theme/theme';
import Carousel from 'react-native-snap-carousel';
import {upcomingMovies, popularMovies, nowPlayingMovies} from '../api/Apicalls';
import {useNavigation} from '@react-navigation/native';
import InputHeader from '../components/InputHeader';

export default function HomeScreen() {
  const {width, height} = Dimensions.get('window');

  const [playingData, setPlayingData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [upcomingData, setupcomingData] = useState([]);

  const navigation = useNavigation();

  const getUpcomingMoviesList = async () => {
    try {
      let response = await fetch(upcomingMovies);
      let json = await response.json();
      setupcomingData(json.results);
    } catch (error) {
      console.error(
        ' Something went wrong in getUpcomingMoviesList Function',
        error,
      );
    }
  };
  useEffect(() => {
    getUpcomingMoviesList();
  }, []);
  const getPopularMoviesList = async () => {
    try {
      let response = await fetch(popularMovies);
      let json = await response.json();
      setPopularData(json.results);
    } catch (error) {
      console.error(
        ' Something went wrong in getUpcomingMoviesList Function',
        error,
      );
    }
  };
  useEffect(() => {
    getPopularMoviesList();
  }, []);
  const getPlayingMoviesList = async () => {
    try {
      let response = await fetch(nowPlayingMovies);
      let json = await response.json();
      setPlayingData(json.results);
    } catch (error) {
      console.error(
        ' Something went wrong in getUpcomingMoviesList Function',
        error,
      );
    }
  };
  useEffect(() => {
    getPlayingMoviesList();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <InputHeader isHome={true}  />
      <ScrollView>
        <Text style={styles.nowPlayingText}>Now Playing</Text>
        <Carousel
          loop 
          width={width}
          height={height / 2}
          autoPlay={false}
          data={popularData}
          sliderWidth={width}
          itemWidth={width}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.imagePlayingContainer}
                onPress={() => navigation.navigate('MovieDetailsScreen', item)}>
                <Image
                  style={styles.imagePlaying}
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
                  }}
                />
                <Text style={{color: '#fff'}}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <Text style={styles.papularText}>Popular</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          data={popularData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetailsScreen', item)}>
                <Image
                  style={styles.imageUpComing}
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/w500/' + item.backdrop_path,
                  }}
                />
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <Text style={styles.upComingText}>Up Coming</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          data={upcomingData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetailsScreen', item)}>
                <Image
                  style={styles.imageUpComing}
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/w500/' + item.backdrop_path,
                  }}
                />
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  imagePlaying: {
    height: 320,
    width: 250,
    margin: 10,
    resizeMode: 'cover',
    borderRadius: 15,
    elevation: 10,
    opacity: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: COLORS.Orange,
  },
  imageUpComing: {
    height: 180,
    width: 150,
    margin: 10,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  title: {
    color: COLORS.White,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: FONTS.primary2,
  },
  nowPlayingText: {
    color: COLORS.White,
    fontFamily: FONTS.primary2,
    fontSize: 20,
    padding: 10,
  },
  papularText: {
    color: COLORS.White,
    fontFamily: FONTS.primary2,
    fontSize: 20,
    padding: 10,
  },
  upComingText: {
    color: COLORS.White,
    fontFamily: FONTS.primary2,
    fontSize: 20,
    padding: 10,
  },
  imagePlayingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
