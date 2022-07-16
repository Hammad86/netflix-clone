
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8ILvVrLHwHX_Cs9OfmNRP9Je4dozFtBM",
    authDomain: "netflix-clone-240a9.firebaseapp.com",
    projectId: "netflix-clone-240a9",
    storageBucket: "netflix-clone-240a9.appspot.com",
    messagingSenderId: "136246656318",
    appId: "1:136246656318:web:8fe85e78d751896ad3806f"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth()

export {auth}
export default db
