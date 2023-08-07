// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBasrV94zfOncRF4pg4P4vDy_6Rn5g9_q4',
  authDomain: 'movieuserinformation.firebaseapp.com',
  projectId: 'movieuserinformation',
  storageBucket: 'movieuserinformation.appspot.com',
  messagingSenderId: '540059195413',
  appId: '1:540059195413:web:6a645c464e50ae6da1561c',
  measurementId: 'G-1ZFCGP6X4R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');
export default app;
