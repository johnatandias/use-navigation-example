import React from 'react';
import css from './Todos.module.css';

export interface Todo {
  name: string,
  completed: boolean,
};

export const Todos: React.FC<{todos: Todo[], visible: boolean}> = ({
  todos,
  visible
}) => {
  if (!visible) return null;

  return (
    <div className={css.todos}>
      {todos.map((todo: Todo, index: number) => (
        <span
          nav-selectable="true"
          key={index}
          className={`${css.todo} ${todo.completed ? css.completed : ''}`}>
          {todo.name}
        </span>
      ))}
    </div>
  )
};
