import * firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQMPmUpnPhxuwVrsqB8mKi0Jrc8N590SQ",
    authDomain: "atividadefinal-5f4e9.firebaseapp.com",
    databaseURL: "https://atividadefinal-5f4e9-default-rtdb.firebaseio.com",
    projectId: "atividadefinal-5f4e9",
    storageBucket: "atividadefinal-5f4e9.appspot.com",
    messagingSenderId: "657536214945",
    appId: "1:657536214945:web:e5be68314f916c32d64de0"
  };
  
 export const firebaseApp = firebase.initializeApp(firebaseConfig);
 export const atividadeFinal = firebaseApp.database().ref("contas");