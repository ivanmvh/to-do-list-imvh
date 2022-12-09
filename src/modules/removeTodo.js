import listTodos from './list_Todos.js';
import { todosData } from './Todos_Data.js';

const removeTodo = () => {
  const clearButton = document.querySelector('.clear-completed');

  clearButton.addEventListener('click', () => {
    todosData.clearCompleted();
    listTodos();
  });
};

export default removeTodo;