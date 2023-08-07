import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../theme/theme';
import SettingsComp from '../components/SettingsComp';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {setUser} from '../../redux/slice/user';
export default function UserAccount() {
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(setUser(null));
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.tabContainer}>
        <Header />
        <Text style={styles.myProfileText}>My Profile</Text>
      </View>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require('./../../assets/images/person.png')}
        />
        <Text style={styles.nameText}>{user}</Text>
      </View>
      <ScrollView>
        <SettingsComp
          name="user"
          heading="Account"
          subheading="Edit Profile"
          subtitle="Change Password"
        />
        <SettingsComp
          name="setting"
          heading="Settings"
          subheading="Theme"
          subtitle="Permissions"
        />
        <TouchableOpacity style={styles.button} onPress={Logout}>
          <Entypo name="log-out" size={24} color={COLORS.White} />
          <Text style={styles.logout_Text}>LOGOUT</Text>
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
  tabContainer: {
    alignItems: 'center',
    flexDirection: 'row',
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
  myProfileText: {
    color: COLORS.White,
    fontFamily: FONTS.primary2,
    fontSize: 20,
    padding: 10,
    marginLeft: '35%',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  nameText: {
    color: COLORS.White,
    fontFamily: FONTS.primary,
  },
  logout_Text: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: FONTS.primary,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
