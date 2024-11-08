import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBHDQFS6lJKkgxotaIMtm-M255hT49T3HE",
  authDomain: "wa-clone-e65ea.firebaseapp.com",
  projectId: "wa-clone-e65ea",
  storageBucket: "wa-clone-e65ea.appspot.com",
  messagingSenderId: "477170941101",
  appId: "1:477170941101:web:c767b203fb13f211b61a24"

};

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };

