import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {COLORS, FONTS} from '../theme/theme';
import Lottie from 'lottie-react-native';
import ButtonComp from '../components/ButtonComp';
import Input from '../components/Input';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/firebase';
import Snackbar from 'react-native-snackbar';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/slice/user';
export default function SignUp() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const SignSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6).required('Please enter your password'),
  });
  const handelSignUp = async (email, password) => {
    if (email && password) {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(email));
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
        validationSchema={SignSchema}
        onSubmit={values => handelSignUp(values.email, values.password)}
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <View style={styles.borderContainer}>
            <View style={{zIndex: 999999}}>
              <Header position="absolute" />
            </View>
            <View style={{marginTop: '20%'}}>
              <View style={styles.lottie}>
                <Lottie
                  loop
                  width={200}
                  height={200}
                  autoPlay
                  source={require('./../../assets/animations/login.json')}
                />
              </View>
              <Input
                placeholder="Username"
                value={values.username}
                onChangeText={handleChange('username')}
              />
              {touched.username && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Input
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              <Input
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
              />
            </View>

            <ButtonComp title="Sign Up" onPress={handleSubmit} />
            <View style={styles.textContainers}>
              <Text style={styles.text}>Already have an account ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signUp}>LOGİN</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderContainer: {
    width: '95%',
    alignSelf: 'center',
    flex: 1,
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
  errorText: {
    color: COLORS.Orange,
    fontSize: 15,
  },
});
