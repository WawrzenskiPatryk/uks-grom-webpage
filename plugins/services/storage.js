export default class StorageService {
  static setSessionItem(itemKey, itemValue) {
    sessionStorage.setItem(itemKey, JSON.stringify(itemValue));
  }

  static getSessionItem(itemKey) {
    return JSON.parse(sessionStorage.getItem(itemKey));
  }
}
