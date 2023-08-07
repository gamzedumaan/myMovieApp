import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {COLORS, FONTS} from '../theme/theme';
import Lottie from 'lottie-react-native';
import ButtonComp from '../components/ButtonComp';
import Snackbar from 'react-native-snackbar';
import Input from '../components/Input';
const {width} = Dimensions.get('window');
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUser, setUserLoading} from '../../redux/slice/user';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/firebase';
import {Formik} from 'formik';

import * as Yup from 'yup';
export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6).required('Please enter your password'),
  });
  const loginSubmit = async (email, password) => {
    console.log(email + ' ' + password);
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUser(email));
        dispatch(setUserLoading(false));
      } catch (e) {
        console.log(e);
        dispatch(setUserLoading(false));
        Snackbar.show({
          text: e.message,
          backgroundColor: 'red',
        });
      }
    } else {
      Snackbar.show({
        text: 'Email and Password are required!',
        backgroundColor: 'red',
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Formik
        validationSchema={LoginSchema}
        onSubmit={values => loginSubmit(values.email, values.password)}
        initialValues={{
          email: '',
          password: '',
        }}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <View style={{width: '95%', alignSelf: 'center'}}>
            <View style={{zIndex: 999999}}>
              <Header position="absolute" />
            </View>
            <View style={styles.lottie}>
              <Lottie
                width={200}
                height={200}
                autoPlay
                source={require('./../../assets/animations/login.json')}
              />
            </View>
            <Input
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.errors_Text}>{errors.email}</Text>
            )}
            <Input
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={styles.errors_Text}>{errors.password}</Text>
            )}
            <View style={styles.textContainer}>
              <TouchableOpacity>
                <Text style={styles.rememberText}>Remember Me</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.forgetText}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            <ButtonComp title="Login" onPress={handleSubmit} />
            <View style={styles.textContainers}>
              <Text style={styles.text}>Don't have an account ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUp}>SİGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },

  lottie: {
    width: width * 0.9,
    height: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: COLORS.White,
    fontFamily: FONTS.primary,
  },
  signUp: {
    color: COLORS.Yellow,
    fontSize: 15,
    fontWeight: '700',
    fontFamily: FONTS.primary2,
    left: 5,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rememberText: {
    color: COLORS.Yellow,
    fontFamily: FONTS.primary,
  },
  errors_Text: {
    color: COLORS.Orange,
    fontSize: 11,
    textAlign: 'right',
  },
  forgetText: {
    color: COLORS.Yellow,
    fontFamily: FONTS.primary,
  },
});
