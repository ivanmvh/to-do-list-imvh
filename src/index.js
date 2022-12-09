import _, { forEach } from 'lodash';
import './style.css';
import Icon from './bg-una-pareja-tango-desktop.png';

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

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = ' ';
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}

var todo_tasks_arr = [
  {description: "breakfast, desayunar", completed: false, index: 1},
  {description: "lunch, almorzar", completed: false, index: 2},
  {description: "dinner, cenar", completed: false, index: 3},
  {description: "sleep, dormir", completed: false, index: 4},
]

/* document.body.appendChild(component()); */

const tasksListRef = document.querySelector('#task-list');


todo_tasks_arr.forEach((task) => {
  
  const taskRef = document.createElement('li');
  /*taskRef.innerHTML =  `<p class="task">${task.description}</p>`;*/
  taskRef.innerHTML =  `
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
