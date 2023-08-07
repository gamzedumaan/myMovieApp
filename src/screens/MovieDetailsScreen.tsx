import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../theme/theme';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
const {width, height} = Dimensions.get('window');
export default function MovieDetailsScreen({route}) {
  const navigation = useNavigation();

  console.log(route.params);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/' + route.params.poster_path,
          }}
        />

        <LinearGradient
          colors={[
            'transparent',
            'rgba(23, 23, 23, 0.8)',
            'rgba(23, 23, 23, 1)',
          ]}
          style={{
            width,
            height: height * 0.4,
            bottom: 0,
            position: 'absolute',
          }}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
        />
        <Header />
      </ScrollView>
      <ScrollView>
        <Text style={styles.nameText}>{route.params.original_title}</Text>
        <Text style={styles.overviewText}>{route.params.overview}</Text>
        <TouchableOpacity
          style={styles.boxButton}
          onPress={() => navigation.navigate('VideoScreen', route.params.id)}>
          <Text style={styles.youtubeText}>Youtube Click</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  nameText: {
    color: COLORS.White,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: FONTS.primary,
    textAlign: 'center',
  },
  overviewText: {
    color: COLORS.White,
    fontSize: 10,
    textAlign: 'center',
    fontFamily: FONTS.primary2,
    marginTop: 10,
  },
  icon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.Orange,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 20,
    marginLeft: 5,
  },
  image: {
    height: SIZES.height / 1.6,
    width: SIZES.width / 1,
  },

  boxButton: {
    height: 45,
    width: SIZES.width - 110,
    alignSelf: 'center',
    backgroundColor: COLORS.Orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  youtubeText: {
    color: COLORS.White,
    fontSize: 15,
  },
});
