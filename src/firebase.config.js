// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCa8GzF2uuXyhykFDj1MN-PwyoCQP0RyOQ',
  authDomain: 'house-marketplace-app-ecc52.firebaseapp.com',
  projectId: 'house-marketplace-app-ecc52',
  storageBucket: 'house-marketplace-app-ecc52.appspot.com',
  messagingSenderId: '975356970783',
  appId: '1:975356970783:web:393940ca62fdec436e122a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()