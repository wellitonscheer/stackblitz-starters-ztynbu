// Import the functions you need from the SDKs you need
import {} from 'firebase';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBszAux0Kf5w2cQxaZM552ANGKV6oXtehw',
  authDomain: 'damp-9ddea.firebaseapp.com',
  projectId: 'damp-9ddea',
  storageBucket: 'damp-9ddea.appspot.com',
  messagingSenderId: '943154596687',
  appId: '1:943154596687:web:31c6724537a98d0d10133a',
  measurementId: 'G-PYXCXSX635',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
