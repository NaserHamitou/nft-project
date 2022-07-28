import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  storageBucket: 'gs://nas-mint-project.appspot.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;