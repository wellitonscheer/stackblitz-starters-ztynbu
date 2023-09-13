import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBszAux0Kf5w2cQxaZM552ANGKV6oXtehw',
  authDomain: 'damp-9ddea.firebaseapp.com',
  projectId: 'damp-9ddea',
  storageBucket: 'damp-9ddea.appspot.com',
  messagingSenderId: '943154596687',
  appId: '1:943154596687:web:31c6724537a98d0d10133a',
  measurementId: 'G-PYXCXSX635',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export function signIn(usuario: string, senha: string) {
  return signInWithEmailAndPassword(auth, usuario, senha);
}

export function createUser(usuario: string, senha: string) {
  return createUserWithEmailAndPassword(auth, usuario, senha);
}
