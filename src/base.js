import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
  "projectId": "upload-lessons",
  "appId": "1:1028381580212:web:fb819e29aa2808748130e1",
  "databaseURL": "https://upload-lessons-default-rtdb.firebaseio.com",
  "storageBucket": "upload-lessons.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyBbWnzDXwpy-FjzpUNQBv3PXA8jVkwBH-k",
  "authDomain": "upload-lessons.firebaseapp.com",
  "messagingSenderId": "1028381580212"
});

