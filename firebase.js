import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
//add your key
};

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };

