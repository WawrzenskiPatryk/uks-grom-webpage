export default class StorageService {
  static setLocalItem(itemKey, itemValue) {
    localStorage.setItem(itemKey, JSON.stringify(itemValue));
  }

  static getLocalItem(itemKey) {
    return JSON.parse(localStorage.getItem(itemKey));
  }

  static setSessionItem(itemKey, itemValue) {
    sessionStorage.setItem(itemKey, JSON.stringify(itemValue));
  }

  static getSessionItem(itemKey) {
    return JSON.parse(sessionStorage.getItem(itemKey));
  }
}
