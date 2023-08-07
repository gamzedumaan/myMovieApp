import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {videoMovies} from './../api/Apicalls';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {COLORS} from '../theme/theme';
import YoutubePlayer from 'react-native-youtube-iframe';
import Header from '../components/Header';
export default function VideoScreen({route}) {
  console.log(route);
  const [videoData, setVideoData] = useState([]);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const getVideoMoviesList = async () => {
    try {
      let response = await fetch(videoMovies(route.params));
      let json = await response.json();
      console.log(json.results);
      setVideoData(json.results);
    } catch (error) {
      console.error(
        ' Something went wrong in getUpcomingMoviesList Function',
        error,
      );
    }
  };
  useEffect(() => {
    getVideoMoviesList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={videoData}
        renderItem={({item}) => {
          return (
            <View style={styles.dataContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={item.key}
                onChangeState={onStateChange}
              />
            </View>
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
  dataContainer: {
    flex: 1,
    marginTop: '25%',
  },
  nameText: {
    fontSize: 20,
    textAlign: 'left',
    color: '#fff',
    fontWeight: '700',
    marginBottom: 20,
  },
});
