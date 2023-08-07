import {StyleSheet} from 'react-native';
import React from 'react';
import TabNavigators from './src/Navigators/TabNavigators';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <GestureHandlerRootView style={styles.appContainer}>
          <TabNavigators />
        </GestureHandlerRootView>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
