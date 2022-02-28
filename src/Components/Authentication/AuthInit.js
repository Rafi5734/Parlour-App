import { initializeApp } from "firebase/app";
import firebaseConfig from "./Authentication.config";


const authInitialize = () => {
    initializeApp(firebaseConfig);
}

export default authInitialize; 