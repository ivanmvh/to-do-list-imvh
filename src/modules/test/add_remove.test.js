/*
 * @jest-environment jsdom
 */

import { todosData } from '../Todos_Data.js';

describe('add and remove', () => {
  test('addTodo method test', () => {
    todosData.addTodo('description1');
    todosData.addTodo('description2');
    expect(JSON.parse(localStorage.getItem('todos'))[0].description).toBe('description1');
    expect(JSON.parse(localStorage.getItem('todos'))[1].description).toBe('description2');
  });

  test('remove method test', () => {
    todosData.removeTodo(1);
    expect(JSON.parse(localStorage.getItem('todos')).length).toBe(1);
  });
});
