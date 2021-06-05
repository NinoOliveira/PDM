import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAVSxL1nkvtIYB4XXttOzFFqVmIBj43Iyo",
    authDomain: "atividade-2-11b74.firebaseapp.com",
    databaseURL: "https://atividade-2-11b74-default-rtdb.firebaseio.com",
    projectId: "atividade-2-11b74",
    storageBucket: "atividade-2-11b74.appspot.com",
    messagingSenderId: "930469182740",
    appId: "1:930469182740:web:d4f27d0604ec60d29e1601"
 };
 export const firebaseApp = firebase.initializeApp(firebaseConfig);
 export const atividade2 = firebaseApp.database().ref("contatos");