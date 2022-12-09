import listTodos from './list_Todos.js';
import { todosData } from './Todos_Data.js';

const addTodo = () => {
  const formContainer = document.querySelector('#add-new-todo-form');
  formContainer.innerHTML = `
    <form class="add-new-task" action="">
      <input type="text" id="todo" name="description" placeholder="Add to your list..." />
      <button id="add-todo" type="button">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
  </form>
  `;

  const form = formContainer.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = form.description.value;
    todosData.addTodo(description);
    form.description.value = '';
    listTodos();
  });
};

export default addTodo;