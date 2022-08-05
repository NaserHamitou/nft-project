import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, StorageReference } from "firebase/storage";

const NUMBER_OF_EYES = 6;
const NUMBER_OF_HAIR = 6;
const NUMBER_OF_MOUTH = 6;
const NUMBER_OF_NOSE = 4;

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

/****************** 
*    Methods
******************/
//Selected parts
const getRef = (number: number, facePart: string) => {
  const partRef: string = `${facePart}-${number}.png`;
  const refer = ref( ref(headPartsRef, facePart), partRef);
  return refer;
}

const selectedFace = new Map<string, string>();

const getRandom = (maxAmout: number) => {
  return Math.floor(Math.random() * maxAmout) + 1;
}

export const getFace = async ():Promise<Map<string, string>> => {
  await fetchFace(async () => {
    console.log('Waiting for images...');
    setTimeout(() => {
      console.log('Images received!');
    }, 850);
  }).then(() => {
    return selectedFace;
  });
  return selectedFace;
}

const fetchFace = (_callback: any) => {
  const prom = new Promise(async (resolve, reject) => {
    resolve('Success');
    reject('Failed');
  }).then(async () => {
    await selectedFace.set('eyes', await getUrl(getRef(getRandom(NUMBER_OF_EYES), 'eyes')));
    await selectedFace.set('hair', await getUrl(getRef(getRandom(NUMBER_OF_HAIR), 'hair')));
    await selectedFace.set('nose', await getUrl(getRef(getRandom(NUMBER_OF_NOSE), 'nose')));
    await selectedFace.set('mouth', await getUrl(getRef(getRandom(NUMBER_OF_MOUTH), 'mouth')));
  });
  _callback();
  return prom;
}

const getUrl = async (reference: StorageReference) => {
  let selectedURL: string = '';
  await getDownloadURL(reference)
  .then((url) => {
    selectedURL = url;
  })
  .catch((error) => {
    console.log(error);
  });
  return selectedURL;
 }

