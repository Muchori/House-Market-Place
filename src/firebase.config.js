import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCHlrtnnL3fOJ3J4LMnFZKO_Rot5IBt0jw',
  authDomain: 'house-market-place-6d07c.firebaseapp.com',
  projectId: 'house-market-place-6d07c',
  storageBucket: 'house-market-place-6d07c.appspot.com',
  messagingSenderId: '895974508081',
  appId: '1:895974508081:web:114f133441821f04d3f710',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
