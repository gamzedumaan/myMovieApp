import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/SearchScreen';
import {COLORS} from '../theme/theme';
import UserAccount from '../screens/UserAccount';
import VideoScreen from '../screens/VideoScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';
import {useSelector} from 'react-redux';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeProvider = () => {
  const {user} = useSelector(state => state.user);

  if (!user) {
    return <LoginStack />;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        title: '',
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="MovieStack"
        component={MovieStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <MaterialIcons
                  name="ondemand-video"
                  size={24}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <FontAwesome5 name="search" size={24} color={COLORS.White} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="UserAccount"
        component={UserAccount}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

function MovieStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
    </Stack.Navigator>
  );
}
function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default function TabNavigators() {
  return (
    <NavigationContainer>
      <HomeProvider />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: 10,
    borderRadius: 50,
    opacity: 0.8,
  },
});
