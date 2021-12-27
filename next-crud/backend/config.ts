import firebase from "firebase/compat/app";

// substititur por variáveis de ambiente
// colocar valores conforme configuração do firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDw3KhwxArGOZn0nWskOIGAF8XuK-SI7lg",
    authDomain: "next-crud-76942.firebaseapp.com",
    projectId: "next-crud-76942",
    storageBucket: "next-crud-76942.appspot.com",
    messagingSenderId: "1072519509682",
    appId: "1:1072519509682:web:864155f3a67eb2086f7bab",
  });
}

export default firebase;
