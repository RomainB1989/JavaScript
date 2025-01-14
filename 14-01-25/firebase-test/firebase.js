
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID
// };

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC85_0Qqg4fQrQN-28VMtOIKKXyt_kF5Ns",
    authDomain: "project-deadspaguettis.firebaseapp.com",
    databaseURL: "https://project-deadspaguettis-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-deadspaguettis",
    storageBucket: "project-deadspaguettis.firebasestorage.app",
    messagingSenderId: "972442616931",
    appId: "1:972442616931:web:2bf29aaf327ecc26f0a456"
  };

/**
 * Initialisation de Firebase avec la configuration fournie.
 * @function initializeFirebase
 */
firebase.initializeApp(firebaseConfig);

/**
 * Référence à la base de données Firebase.
 * @type {Object}
 */
const dbRef = firebase.database().ref();

/**
 * Référence à la base de données Firebase.
 * @type {Object}
 */
const AllTaskRef = dbRef.child("products");

/**
 * Référence au noeud "tasks" dans la base de données.
 * @type {Object}
 */
const allTasksRef = dbRef.child("tasks");