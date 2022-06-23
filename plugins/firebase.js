import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBF5o1j3Oy1V4bEMgLv6xd5RmtN8I3LVDI',
  authDomain: 'uks-grom.firebaseapp.com',
  projectId: 'uks-grom',
  storageBucket: 'uks-grom.appspot.com',
  messagingSenderId: '379253269799',
  appId: '1:379253269799:web:3845f2a9ffe90d3e503502',
};

initializeApp(firebaseConfig);

export default class FirebaseService {
  static createMainReference(folderPathName) {
    const storage = getStorage();
    const mainReference = ref(storage, folderPathName);
    return mainReference;
  }

  static async getReferenceItems(reference) {
    const result = await listAll(reference);
    return result.items;
  }

  static async getReferencePrefixes(reference) {
    const result = await listAll(reference);
    return result.prefixes;
  }

  static async getFileURL(itemReference) {
    return await getDownloadURL(itemReference);
  }
}
