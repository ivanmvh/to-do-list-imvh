/*
 * @jest-environment jsdom
 */
import { todosData } from '../Todos_Data.js';

describe('Test edit, mark completed, clear completed', () => {
  test('update description method test', () => {
    todosData.addTodo('description1');
    todosData.addTodo('description2');
    todosData.updateDescription(1, 'description1 mod');
    expect(JSON.parse(localStorage.getItem('todos'))[0].description).toBe('description1 mod');
    todosData.updateDescription(2, 'description2 mod');
    expect(JSON.parse(localStorage.getItem('todos'))[1].description).toBe('description2 mod');
  });

  test('flip complete method test', () => {
    todosData.markAsCompleted(1);
    expect(JSON.parse(localStorage.getItem('todos'))[0].completed).toBe(true);
    expect(JSON.parse(localStorage.getItem('todos'))[1].completed).toBe(false);
  });

  test('clear complete method test', () => {
    const longIni = JSON.parse(localStorage.getItem('todos')).length;
    todosData.clearCompleted();
    expect((JSON.parse(localStorage.getItem('todos'))).length).toBe(longIni - 1);
  });
});
