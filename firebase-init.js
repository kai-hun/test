const firebaseConfig = {
  apiKey: "AIzaSyBtduM2qD8w3gqQ6PUAwU1-swBWBF9Q-o8",
  authDomain: "cafe-80d13.firebaseapp.com",
  projectId: "cafe-80d13",
  storageBucket: "cafe-80d13.firebasestorage.app",
  messagingSenderId: "824452235012",
  appId: "1:824452235012:web:caad376be37830be9d1a51",
  measurementId: "G-S8RD58VE0G"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();