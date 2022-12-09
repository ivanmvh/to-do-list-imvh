import { getLocalStorage } from './local-storage.js';
import Todo from './Todo_class.js';

export default class TodosData {
  constructor(todos) {
    this.todos = todos;
  }

  addTodo(description) {
    const index = this.todos.length + 1;
    const todo = new Todo({ description, index });
    this.todos.push(todo);
    this.setToLocalStorage();
  }

  removeTodo(index) {
    this.todos = this.todos.filter((todo, todoIndex) => todoIndex !== index);
    this.setToLocalStorage();
    this.resetIndex();
  }

  updateDescription(index, description) {
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].index === index) {
        this.todos[i].description = description;
        this.setToLocalStorage();
        break;
      }
    }
  }

  setToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodos() {
    return this.todos.sort((a, b) => a.index - b.index);
  }

  resetIndex1() { const dummy = this.todos; };

  resetIndex() {
    this.todos.forEach((todo, index) => {
      todo.index = index + 1;
    });
    this.setToLocalStorage();
  }

  clearCompleted() { const dummy = this.todos; };

  clearCompleted1() {
    this.todos = this.todos.filter((todo) => todo.completed !== true);
    this.setToLocalStorage();
    this.resetIndex();
  }

  markAsCompleted1(index) { const dummy = this.todos; };

  markAsCompleted(index) {
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].index === index) {
        this.todos[i].completed = !this.todos[i].completed;
        this.setToLocalStorage();
        break;
      }
    }
  }
}

const todosData = new TodosData(getLocalStorage('todos'));

export { todosData };