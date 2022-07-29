import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, StorageReference } from "firebase/storage";

/****************
 *    INIT
 ***************/
const firebaseConfig = {
  apiKey: "AIzaSyCJf-ufqyY_cokHLHfQKoi08CwpvdRSdA0",
  authDomain: "nas-mint-project.firebaseapp.com",
  projectId: "nas-mint-project",
  storageBucket: "nas-mint-project.appspot.com",
  messagingSenderId: "588423734770",
  appId: "1:588423734770:web:ac0857543195ed51a0b76b",
  measurementId: "G-2G5F6GS19F"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const headPartsRef = ref(storage, 'character-components');

/****************
 *    Variables
 ***************/
// URL
export let eyeURL = '';


//Different face parts
const setOfEyesRef = ref(headPartsRef, 'eyes');
const setOfHairRef = ref(headPartsRef, 'hair');
const setOfNoseRef = ref(headPartsRef, 'mouth');
const setOfMouthRef = ref(headPartsRef, 'nose');

const setSelectedParts = () => {

}

//Selected parts
export const pickedEyes = ref(setOfEyesRef, 'eyes-1.png');
export const pickedHair = ref(setOfHairRef, 'eyes-1.png');
export const pickedNose = ref(setOfNoseRef, 'eyes-1.png');
export const pickedMouth = ref(setOfMouthRef, 'eyes-1.png');

export const getUrl = (reference: StorageReference) => {
  let urlReturned = '';

  getDownloadURL(reference)
  .then((url) => {
    urlReturned = url;
    console.log(eyeURL);
  })
  .catch((error) => {
    console.log(error);
  });

  return urlReturned;
 }

getUrl(pickedEyes);