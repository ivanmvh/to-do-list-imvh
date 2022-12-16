// storage.test.js

import { saveToStorage } from './storage';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

describe('storage', () => {
  beforeAll(() => {
    global.localStorage = new LocalStorageMock;    
  });

  it('saves the key to the storage', () => {
    saveToStorage('fake-value');

    expect(global.localStorage.getItem('the-key')).toEqual('fake-value');
  });
});

(function () {
  var localStorage = {};
  localStorage.setItem = function (key, val) {
       this[key] = val + '';
  }
  localStorage.getItem = function (key) {
      return this[key];
  }
  Object.defineProperty(localStorage, 'length', {
      get: function () { return Object.keys(this).length - 2; }
  });

  // Your tests here
  it('saves the key to the storage 2 ', () => {
    saveToStorage('fake-value');

    expect(global.localStorage.getItem('the-key')).toEqual('fake-value2');
  });

})();

