
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCS1rC9N8kT7vXumG4F2XG5LB7qReyL688",
    authDomain: "proyecto-react-a5390.firebaseapp.com",
    projectId: "proyecto-react-a5390",
    storageBucket: "proyecto-react-a5390.firebasestorage.app",
    messagingSenderId: "131244535119",
    appId: "1:131244535119:web:d050bee24ece624ec0293a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar auth y provider de google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {auth, googleProvider};