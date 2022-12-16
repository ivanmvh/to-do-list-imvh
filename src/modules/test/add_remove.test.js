import { todosData } from '../Todos_Data';
global.localStorage = new LocalStorageMock;    

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

  it('addTodo method test', () => {
    todosData.addTodo("description");
    expect(global.localStorage.getItem(0)).toEqual('descripcion');
  });
});
