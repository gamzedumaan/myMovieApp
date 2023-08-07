import {StyleSheet, View, SafeAreaView, Dimensions} from 'react-native';

import React, {useEffect} from 'react';
import {COLORS} from '../theme/theme';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/Loading';
const {width} = Dimensions.get('window');
export default function Welcome() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <Loading />
        <Lottie
          source={require('./../../assets/animations/welcome.json')}
          autoPlay
          width={300}
          height={300}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  lottie: {
    flex: 1,
    width: width * 0.9,
    height: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
