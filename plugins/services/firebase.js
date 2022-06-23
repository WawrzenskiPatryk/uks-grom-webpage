import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

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
