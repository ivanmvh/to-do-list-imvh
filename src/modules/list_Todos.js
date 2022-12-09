import { todosData } from './Todos_Data.js';

const listTodos = () => {
  const todosListElement = document.querySelector('#todos_list');
  const todos = todosData.getTodos();
  todosListElement.innerHTML = '';
  todos.forEach((todo) => {
    const todoElement = document.createElement('li');
    todoElement.innerHTML = `
      <li class="todo">
        <input type="checkbox" id="checked" class='checkbox' ${todo.completed ? 'checked' : ''}
          >
        <input type="text" id="listItem" class='description' value= "${todo.description}">
        <i class="fa-solid fa-ellipsis-vertical move"></i>
        <i class="fa-solid fa-trash-can delete"></i>
      </li>`;
    todosListElement.appendChild(todoElement);
  });
  const checkboxs = todosListElement.querySelectorAll('.checkbox');
  checkboxs.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      todosData.markAsCompleted(index + 1);
    });
  });
  const descriptions = todosListElement.querySelectorAll('.description');
  descriptions.forEach((description, index) => {
    description.addEventListener('change', () => {
      todosData.updateDescription(index + 1, description.value);
    });
  });
};

export default listTodos;