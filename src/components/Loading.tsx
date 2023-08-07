import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';

export default function Loading({animating}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={animating}
        size={'large'}
        styles={styles.loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    color: COLORS.Yellow,
  },
});
