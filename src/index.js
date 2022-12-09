import './style.css';

const addTodo = () => {
  const formContainer = document.querySelector('#add-new-form-container');
  formContainer.innerHTML = `
    <form class="add-new-task" action="">
      <input type="text" id="todo" name="description" placeholder="Add to your list..." />
      <button id="add-todo" type="button">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
  </form>
  `;
};

const todoTasksArr = [
  { description: 'breakfast, desayunar', completed: false, index: 1 },
  { description: 'lunch, almorzar', completed: false, index: 2 },
  { description: 'dinner, cenar', completed: false, index: 3 },
  { description: 'sleep, dormir', completed: false, index: 4 },
];

const tasksListRef = document.querySelector('#task-list');
todoTasksArr.forEach((task) => {
  const taskRef = document.createElement('li');
  taskRef.innerHTML = `
    <li class="task">
      <input type="checkbox" id="checked" class='checkbox' ${task.completed ? 'checked' : ''}
      >
      <input type="text" id="listItem" class='description' value= "${task.description}">
      <i class="fa-solid fa-ellipsis-vertical move"></i>
      <i class="fa-solid fa-trash-can delete"></i>
    </li>`;
  tasksListRef.appendChild(taskRef);
});

addTodo();
